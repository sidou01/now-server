import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
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
      //check for optional fields
      /*
      let isPhone = false
      let isAvatar = false

      if(phone) isPhone = true
      if(avatar) isAvatar = true
      */

      const isUser = await prisma.user({ email })
      if (isUser) throw new Error('user already exists')
      let saltRounds = 10

      const hashedPassword = await bcrypt.hash(password, saltRounds)
      return await prisma.createUser({
        fullName,
        email,
        password: hashedPassword,
        age,
        phone,
        avatar,
        gender
      })
    },
    login: async (_, { email, password }, { prisma, jwt_secret }) => {
      const user = await prisma.user({ email })
      if (!user) throw new Error("User deosn't exist")
      const auth = await bcrypt.compare(password, user.password)
      if (!auth) throw new Error('your email or password is wrong')

      const { id, fullName, age, phone, avatar } = user
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
