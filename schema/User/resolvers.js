import {
  UserAppointments,
  AuthenticatedUserInfo,
  reviewToService,
} from '../../fragments'
import sgMail from '@sendgrid/mail'
import { AuthenticationError } from 'apollo-server'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {
  MESSAGE_TO_CLIENT,
  MESSAGE_TO_SERVICE,
  APPOINTMENT_TO_SERVICE,
  REVIEW_TO_SERVICE,
} from '../topics'
import { withFilter } from 'apollo-server'
import { pubsub } from '../../server'
import { messageToService, appointmentToService } from '../../fragments'
import dayjs from 'dayjs'
import { getEndTime } from '../../utils'

export default {
  Query: {
    me: async (_, __, { user: { id }, prisma }) =>
      await prisma.user({ id }).$fragment(AuthenticatedUserInfo),
    //allUsers query will be deleted
    fetchDoctors: async (_, { first, skip }, { prisma, user }) => {
      if (!user) throw new AuthenticationError('401 unathorized')
      return await prisma.doctors(first, skip)
    },
    allUsers: async (_, __, { prisma }) => {
      const output = await prisma.$graphql(`
      query {
        users {
          id
          fullName
          email
          gender
          age
          confirmation
          Appointments {
            id
            startTime
            endTime
          }
          recievedMessages {
            id
            sender{
              id
              fullName
            }
            reciever {
              id
              fullName
            }
            subject
            body
          }
        }
      }
    `)
      return output.users
    },
    //change userId param to context.user.id from token
    userAppointments: async (_, __, { prisma, user }) => {
      if (!user) throw new Error('401 unauthorized')
      const output = await prisma
        .user({ id: user.id })
        .$fragment(UserAppointments)
      if (!output) throw new Error("user doesn't exist with that ID")
      return output.Appointments
    },
  },
  Mutation: {
    reviewService: async (
      _,
      { input: { serviceId, title, content, rating } },
      { prisma, user },
    ) => {
      if (!user) throw new Error('401 unauthorized')
      const output = await prisma.createReview({
        title,
        content,
        rating,
        user: {
          connect: {
            id: user.id,
          },
        },
        service: {
          connect: {
            id: serviceId,
          },
        },
      })

      const createdReview = await prisma
        .review({ id: output.id })
        .$fragment(reviewToService)

      pubsub.publish(REVIEW_TO_SERVICE, {
        reviewRecieved: createdReview,
      })
      return createdReview
    },
    cancelAppointment: async (_, { appointmentId }, { prisma, user }) => {
      if (!user) throw new Error('401 unauthorized')
      const appointment = await prisma.appointment({ id: appointmentId })
      if (!appointment) throw new Error("appointment doesn't exist")
      const cancelTime = dayjs()
      if (cancelTime.diff(dayjs(appointment.createdTime), 'minute') > 10) {
        throw new Error(
          'Sorry you cannot cancel this appointment because you waited too long (10 minutes)',
        )
      }
      return await prisma.deleteAppointment({ id: appointmentId })
    },
    scheduleAppointment: async (
      _,
      { input: { serviceId, clientId, title, startTime, duration } },
      { prisma, pubsub, user },
    ) => {
      if (!user) throw new Error('401 unauthorized')

      const isDuplicate = await prisma.appointment({ startTime })
      if (isDuplicate) throw Error('an appointment already exists at that time')
      const endTime = getEndTime(startTime, duration)
      //can't return client and service data from this resolver
      const output = await prisma.createAppointment({
        service: {
          connect: {
            id: serviceId,
          },
        },
        client: {
          connect: {
            id: clientId,
          },
        },
        title,
        startTime,
        endTime,
        duration,
        local: false,
        createdTime: dayjs().format('MM-DD-YYYY HH:mm:ss'),
      })
      const createdAppointment = await prisma
        .appointment({ id: output.id })
        .$fragment(appointmentToService)

      pubsub.publish(APPOINTMENT_TO_SERVICE, {
        appointmentRecieved: createdAppointment,
      })
      return output
    },

    sendMessageToService: async (_, args, { prisma, pubsub, user }) => {
      if (!user) throw new AuthenticationError('401 unathorized')
      const message = await prisma.createClientMessage({
        sender: {
          connect: {
            id: user.id,
          },
        },
        reciever: {
          connect: {
            id: args.serviceId,
          },
        },
        subject: args.subject,
        body: args.body,
      })
      const messageToPublish = await prisma
        .clientMessage({ id: message.id })
        .$fragment(messageToService)
      pubsub.publish(MESSAGE_TO_SERVICE, {
        messageToServiceAdded: messageToPublish,
      })
      return message
    },
    register: async (
      _,
      { input: { fullName, email, password, age, phone, avatar, gender } },
      { prisma },
    ) => {
      const isUser = await prisma.user({ email })
      if (isUser) throw new Error('user already exists')
      let saltRounds = 10

      const hashedPassword = await bcrypt.hash(password, saltRounds)

      const createdUser = await prisma.createUser({
        fullName,
        email,
        password: hashedPassword,
        age,
        phone,
        avatar,
        gender,
      })

      jwt.sign(
        { userEmail: email },
        process.env.JWT_EMAIL_SECRET,
        (_, emailToken) => {
          sgMail.setApiKey(process.env.SENDGRID_API_KEY)
          const url = `http://localhost:4000/email/confirmation/${emailToken}`
          const msg = {
            to: `${createdUser.email}`,
            from: 'now@company.com',
            subject: 'Confirmation Email',
            text: 'Confirm your mail using this link',
            html: `follow this link <a href=${url}>Confirm Email</a>`,
          }

          sgMail.send(msg)
        },
      )

      return createdUser
    },
    login: async (
      _,
      { input: { email, password } },
      { prisma, jwt_secret },
    ) => {
      const user = await prisma.user({ email })
      if (!user) throw new Error("User deosn't exist")
      const auth = await bcrypt.compare(password, user.password)
      if (!auth) throw new Error('your email or password is wrong')

      const { id, fullName, age, phone, avatar, confirmation } = user
      if (!confirmation)
        throw new AuthenticationError('you must confirm your email first!')
      const token = jwt.sign(
        {
          id,
          fullName,
          email: user.email,
          age,
          avatar,
          phone,
        },
        jwt_secret,
      )
      return token
    },
  },
  Subscription: {
    messageToClientAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(MESSAGE_TO_CLIENT),
        (payload, _, context) => {
          return payload.messageToClientAdded.reciever.id === context.user.id
        },
      ),
    },
  },
}
