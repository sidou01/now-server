import {
  UserAppointments,
  AuthenticatedUserInfo,
  reviewToService,
  clientSentMessages,
  clientRecievedMessages,
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
  CONFIRMATION_ENABLED,
} from '../topics'
import { withFilter } from 'apollo-server'
import { pubsub } from '../../server'
import { messageToService, appointmentToService } from '../../fragments'
import dayjs from 'dayjs'
import { getEndTime, fetchAvatar } from '../../utils'

export default {
  Query: {
    hello: () => 'world',
    me: async (_, __, { prisma, user }) => {
      if (!user) throw new AuthenticationError('401 unathorized')
      return await prisma.user({ id: user.id }).$fragment(AuthenticatedUserInfo)
    },
    fetchUserAppointments: async (_, { first, skip }, { prisma, user }) => {
      if (!user) throw new Error('401 unauthorized')
      if (skip === undefined) skip = null
      if (first === undefined) first = null
      const output = await prisma
        .user({ id: user.id })
        .$fragment(UserAppointments(first, skip))
      if (!output) throw new Error("user doesn't exist with that ID")
      return output.appointments
    },
    searchService: async (_, { query }, { prisma, user }) => {
      // if (!user.client)
      //   throw new AuthenticationError("401: unauthorized client only query")
      const output = await prisma.services({
        where: { fullName_contains: query },
      })
      console.log(output)
      return output
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
      { input: { serviceId, title, start, duration } },
      { prisma, pubsub, user },
    ) => {
      if (!user) throw new Error('401 unauthorized')

      const isDuplicate = await prisma.appointment({ start })
      if (isDuplicate) throw Error('an appointment already exists at that time')
      const end = getEndTime(start, duration)
      //can't return client and service data from this resolver
      const output = await prisma.createAppointment({
        service: {
          connect: {
            id: serviceId,
          },
        },
        client: {
          connect: {
            id: user.id,
          },
        },
        title,
        start,
        end,
        duration,
        local: false,
        createdTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
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

      let avatarUrl = await fetchAvatar(email, fullName)
      if (avatarUrl === '/static/images/avatar_tiles/v1/s.png') avatarUrl = null
      const createdUser = await prisma.createUser({
        fullName,
        email,
        password: hashedPassword,
        age,
        phone,
        avatar: avatarUrl,
        gender,
      })

      jwt.sign(
        { userEmail: email },
        process.env.JWT_EMAIL_SECRET,
        (_, emailToken) => {
          sgMail.setApiKey(process.env.SENDGRID_API_KEY)
          const url = `http://ec2-34-227-32-199.compute-1.amazonaws.com:4000/email/confirmation/${emailToken}`
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
      // if (!user) throw new Error("User deosn't exist")
      if (!user) {
        return {
          success: false,
          error: {
            msg: 'No user associated with that email found.',
            field: 'EMAIL',
          },
        }
      }
      const auth = await bcrypt.compare(password, user.password)
      // if (!auth) throw new Error('your email or password is wrong')
      if (!auth) {
        return {
          success: false,
          error: {
            msg: 'Your password is wrong, Try again.',
            field: 'PASSWORD',
          },
        }
      }

      const { id, fullName, age, phone, avatar, confirmation } = user
      if (!confirmation)
        // throw new AuthenticationError('you must confirm your email first!')
        return {
          success: false,
          error: {
            msg: 'Please verify your email',
            field: 'EMAIL',
          },
        }
      const token = jwt.sign(
        {
          id,
          fullName,
          email: user.email,
          age,
          avatar,
          phone,
          client: true,
        },
        jwt_secret,
      )
      return {
        success: true,
        token,
        user,
        error: null,
      }
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
    confirmationEnabled: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(CONFIRMATION_ENABLED),
        (payload, { userId }) => {
          return payload.confirmationEnabled.id === userId
        },
      ),
    },
  },
}
