import {} from 'dotenv/config'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import sgMail from '@sendgrid/mail'
import { AuthenticationError } from 'apollo-server'
import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import dayjs from 'dayjs'

const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Custom description for the date scalar',
    parseValue(value) {
      return dayjs(value) // value from the client
    },
    serialize(value) {
      return dayjs(value).format('MM-DD-YYYY HH:mm:ss') // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return dayjs(ast.value) // ast value is always in string format
      }
      return null
    }
  }),
  Query: {
    me: (_, __, { user }) => user,
    allDoctors: async (_, __, { prisma }) => await prisma.doctors()
  },
  Mutation: {
    register: async (
      _,
      { fullName, email, password, age, phone, avatar, gender },
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
        gender
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
            html: `follow this link <a href=${url}>Confirm Email</a>`
          }

          sgMail.send(msg)
          console.log('email sent i guess?')
        }
      )

      return createdUser
    },
    login: async (_, { email, password }, { prisma, jwt_secret }) => {
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
          phone
        },
        jwt_secret
      )
      return token
    },
    loginDoctor: async (_, { email, password }, { prisma, jwt_secret }) => {
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
          phone
        },
        jwt_secret
      )
      return token
    },
    addDoctor: async (
      _,
      { fullName, Bio, email, password, age, phone, gender, avatar, specialty },
      { prisma }
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
        specialty
      })
    },
    scheduleAppointment: async (
      _,
      { serviceId, clientId, title, startTime, duration },
      { prisma }
    ) => {
      let endTime
      switch (duration) {
        case 'VERY_SHORT':
          endTime = startTime.add(15, 'minute')
          break
        case 'SHORT':
          endTime = startTime.add(30, 'minute')
          break
        case 'LONG':
          endTime = startTime.add(45, 'minute')
          break
        case 'VERY_LONG':
          endTime = startTime.add(60, 'minute')
          break
      }
      endTime = endTime.format('YYYY-MM-DD HH:mm:ss')
      //can't return client and service data from this resolver
      return await prisma.createAppointment({
        service: {
          connect: {
            id: serviceId
          }
        },
        client: {
          connect: {
            id: clientId
          }
        },
        title,
        startTime,
        endTime,
        duration
      })
    },
    userAppointments: (_, { userEmail }, { prisma }) => {
      return prisma
        .appointments({ email: userEmail })
        .$fragment(FETCH_APPOINTMENTS)
    }
  }
}

export default resolvers
