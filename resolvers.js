import {} from 'dotenv/config'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import sgMail from '@sendgrid/mail'
import { SENDGRID_API_KEY } from './server.js'
import { AuthenticationError } from 'apollo-server'

const resolvers = {
  Query: {
    //protected route
    me: (_, __, { user }) => user
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
          sgMail.setApiKey(SENDGRID_API_KEY)
          const msg = {
            to: `${createdUser.email}`,
            from: 'now@example.com',
            subject: 'Confirmation Email',
            text: 'Confirm your mail using this link',
            html: `follow this link <a href=http://localhost:4000/email/confirmation/${emailToken}>Confirm Email</a>`
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
    }
  }
}

export default resolvers
