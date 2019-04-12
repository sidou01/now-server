import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {
  MESSAGE_TO_CLIENT,
  MESSAGE_TO_SERVICE,
  APPOINTMENT_TO_SERVICE,
  REVIEW_TO_SERVICE
} from "../topics"
import { messageToClient } from "../../fragments"
import { withFilter, AuthenticationError } from "apollo-server"
import { pubsub } from "../../server"
import {
  serviceAppointments,
  serviceReviews,
  AllServices,
  serviceRecievedMessages
} from "../../fragments"

export default {
  Query: {
    fetchService: async (_, { serviceId }, { prisma, user }) => {
      if (!user) throw new Error("401 unauthorized")
      return await prisma.service({ id: serviceId }).$fragment(AllServices)
    },
    fetchServicesByType: async (_, { type, first, skip }, { prisma, user }) => {
      if (!user) throw new Error("401 unauthorized")
      return prisma
        .services({ first, skip, where: { serviceType: type } })
        .$fragment(AllServices)
    },
    fetchAllServices: async (_, { first, skip }, { prisma, user }) => {
      if (!user) throw new Error("401 unauthorized")
      if (skip === undefined) skip = null
      if (first === undefined) first = null

      const output = await prisma
        .services({ first, skip })
        .$fragment(AllServices)
      if (!output) throw new Error("No services added")
      return output
    },
    serviceReviews: async (_, { first, skip }, { prisma, user }) => {
      if (!user) throw new Error("401 unauthorized")
      if (skip === undefined) skip = null
      if (first === undefined) first = null
      const output = await prisma
        .service({ id: user.id })
        .$fragment(serviceReviews(first, skip))

      if (!output) throw new Error("doctor doesn't exist with that ID")
      return output.reviews
    },
    fetchServiceAppointments: async (_, __, { prisma, user }) => {
      if (!user) throw new AuthenticationError("401 unathorized")
      const output = await prisma
        .service({ id: user.id })
        .$fragment(serviceAppointments)
      if (!output) throw new Error("no service with that email address")
      return output.appointments
    }
  },
  Mutation: {
    sendMessageToClient: async (_, args, { prisma, pubsub, user }) => {
      if (!user) throw new AuthenticationError("401 unathorized")
      if (user.client)
        throw new AuthenticationError(
          "Error: you cannot send service messages from a client account"
        )
      const message = await prisma.createServiceMessage({
        sender: {
          connect: {
            id: user.id
          }
        },
        reciever: {
          connect: {
            id: args.clientId
          }
        },
        subject: args.subject,
        body: args.body
      })
      const messageToPublish = await prisma
        .serviceMessage({ id: message.id })
        .$fragment(messageToClient)
      pubsub.publish(MESSAGE_TO_CLIENT, {
        messageToClientAdded: messageToPublish
      })
      return message
    },
    loginService: async (
      _,
      { input: { email, password } },
      { prisma, jwt_secret }
    ) => {
      const service = await prisma.service({ email })
      if (!service) throw new Error("doctor deosn't exist")
      const auth = await bcrypt.compare(password, service.password)
      if (!auth) throw new Error("your email or password is wrong")

      const { id, fullName, age, phone, avatar } = service
      const token = jwt.sign(
        {
          id,
          fullName,
          email: service.email,
          age,
          avatar,
          phone,
          client: false
        },
        jwt_secret
      )
      return token
    },
    addService: async (
      _,
      {
        input: {
          fullName,
          Bio,
          email,
          password,
          age,
          phone,
          gender,
          avatar,
          doctorField,
          lawyerField,
          type
        }
      },
      { prisma }
    ) => {
      const hashedPassword = await bcrypt.hash(password, 10)
      if (type === "Lawyer") {
        return await prisma.createService({
          fullName,
          Bio,
          email,
          password: hashedPassword,
          age,
          phone,
          gender,
          avatar,
          lawyerField,
          serviceType: type
        })
      }
      return await prisma.createService({
        fullName,
        Bio,
        email,
        password: hashedPassword,
        age,
        phone,
        gender,
        avatar,
        doctorField,
        serviceType: type
      })
    }
  },
  Subscription: {
    messageToServiceAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(MESSAGE_TO_SERVICE),
        (payload, _, context) => {
          return payload.messageToServiceAdded.reciever.id === context.user.id
        }
      )
    },
    appointmentRecieved: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(APPOINTMENT_TO_SERVICE),
        (payload, _, context) => {
          return payload.appointmentRecieved.service.id === context.user.id
        }
      )
    },
    reviewRecieved: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(REVIEW_TO_SERVICE),
        (payload, _, context) => {
          return payload.reviewRecieved.service.id === context.user.id
        }
      )
    }
  }
}
