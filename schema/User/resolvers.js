import { UserAppointments, AuthenticatedUserInfo } from '../../fragments'
import sgMail from '@sendgrid/mail'
import { AuthenticationError } from 'apollo-server'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { MESSAGE_TO_CLIENT, MESSAGE_TO_SERVICE } from '../topics'
import { withFilter } from 'apollo-server'
import { pubsub } from '../../server'
import { messageToService } from '../../fragments'

export default {
  Query: {
    me: async (_, __, { user: { id }, prisma }) =>
      await prisma.user({ id }).$fragment(AuthenticatedUserInfo),
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
    userAppointments: async (_, { userId }, { prisma }) => {
      const output = await prisma
        .user({ id: userId })
        .$fragment(UserAppointments)
      if (!output) throw new Error("user doesn't exist with that ID")
      return output.Appointments
    },
    cancelAppointment: async (_, { serviceId }, { prisma }) => {
      return await prisma.delete
    },
  },
  Mutation: {
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
      { prisma }
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
        (err, emailToken) => {
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
        }
      )

      return createdUser
    },
    login: async (
      _,
      { input: { email, password } },
      { prisma, jwt_secret }
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
        jwt_secret
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
        }
      ),
    },
  },
}
