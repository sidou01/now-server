import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {
  MESSAGE_TO_CLIENT,
  MESSAGE_TO_SERVICE,
  APPOINTMENT_TO_SERVICE,
  REVIEW_TO_SERVICE,
} from '../topics'
import { messageToClient } from '../../fragments'
import { withFilter, AuthenticationError } from 'apollo-server'
import { pubsub } from '../../server'
import { doctorAppointments, doctorReviews } from '../../fragments'

export default {
  Query: {
    allServices: async (_, __, { prisma }) => await prisma.doctors(),
    doctorReviews: async (_, { first, skip }, { prisma, user }) => {
      if (!user) throw new Error('401 unauthorized')
      if (skip === undefined) skip = null
      if (first === undefined) first = null
      const output = await prisma
        .doctor({ id: user.id })
        .$fragment(doctorReviews(first, skip))

      if (!output) throw new Error("doctor doesn't exist with that ID")
      return output.reviews
    },
    fetchServiceAppointments: async (_, __, { prisma, user }) => {
      if (!user) throw new AuthenticationError('401 unathorized')
      const output = await prisma
        .doctor({ id: user.id })
        .$fragment(doctorAppointments)
      if (!output) throw new Error('no service with that email address')
      return output.appointments
    },
  },
  Mutation: {
    sendMessageToClient: async (_, args, { prisma, pubsub, user }) => {
      if (!user) throw new AuthenticationError('401 unathorized')
      const message = await prisma.createServiceMessage({
        sender: {
          connect: {
            id: user.id,
          },
        },
        reciever: {
          connect: {
            id: args.clientId,
          },
        },
        subject: args.subject,
        body: args.body,
      })
      const messageToPublish = await prisma
        .serviceMessage({ id: message.id })
        .$fragment(messageToClient)
      pubsub.publish(MESSAGE_TO_CLIENT, {
        messageToClientAdded: messageToPublish,
      })
      return message
    },
    loginService: async (
      _,
      { input: { email, password } },
      { prisma, jwt_secret },
    ) => {
      const doctor = await prisma.doctor({ email })
      if (!doctor) throw new Error("doctor deosn't exist")
      const auth = await bcrypt.compare(password, doctor.password)
      if (!auth) throw new Error('your email or password is wrong')

      const { id, fullName, age, phone, avatar } = doctor
      const token = jwt.sign(
        {
          id,
          fullName,
          email: doctor.email,
          age,
          avatar,
          phone,
        },
        jwt_secret,
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
          specialty,
        },
      },
      { prisma },
    ) => {
      const isDoctor = await prisma.doctor({ email })
      if (isDoctor) throw new Error('Doctor already exists with that email.')
      const hashedPassword = await bcrypt.hash(password, 10)
      return await prisma.createDoctor({
        fullName,
        Bio,
        email,
        password: hashedPassword,
        age,
        phone,
        gender,
        avatar,
        specialty,
      })
    },
  },
  Subscription: {
    messageToServiceAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(MESSAGE_TO_SERVICE),
        (payload, _, context) => {
          return payload.messageToServiceAdded.reciever.id === context.user.id
        },
      ),
    },
    appointmentRecieved: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(APPOINTMENT_TO_SERVICE),
        (payload, _, context) => {
          return payload.appointmentRecieved.service.id === context.user.id
        },
      ),
    },
    reviewRecieved: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(REVIEW_TO_SERVICE),
        (payload, _, context) => {
          return payload.reviewRecieved.service.id === context.user.id
        },
      ),
    },
  },
}
