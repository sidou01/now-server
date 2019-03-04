import {} from 'dotenv/config'
import {} from 'dotenv/config'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import sgMail from '@sendgrid/mail'
import { AuthenticationError } from 'apollo-server'
import moment from 'moment'
import { GraphQLScalarType } from 'graphql'

const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'custom scalar type that represents dates',
    serialize(value) {
      // Implement your own behavior here by setting the 'result' variable
      console.log('serialize:', value)
      return result
    },
    parseValue(value) {
      //2013-02-08 09:30
      let result
      // Implement your own behavior here by setting the 'result' variable
      result = moment('2010-10-20 4:30', 'YYYY-MM-DD HH:mm')
      console.log('parsed:', result)

      return result
    },
    parseLiteral(ast) {
      switch (
        ast.kind
        // Implement your own behavior here by returning what suits your needs
        // depending on ast.kind
      ) {
      }
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
    addDoctor: async (
      _,
      { fullName, Bio, email, password, age, phone, gender, avatar, specialty },
      { prisma }
    ) => {
      const isDoctor = await prisma.doctor({ email })
      if (isDoctor) throw new Error('Doctor already exists with that email.')
      return await prisma.createDoctor({
        fullName,
        Bio,
        email,
        password,
        age,
        phone,
        gender,
        avatar,
        specialty
      })
    },
    scheduleAppointment: async (
      _,
      { serviceId, userId, title, startTime, duration },
      { prisma }
    ) => {}
  }
}

export default resolvers
