import { UserAppointments, AuthenticatedUserInfo } from '../../fragments'
import sgMail from '@sendgrid/mail'
import { AuthenticationError } from 'apollo-server'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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
          gender
          age
          Appointments {
            id
            startTime
            endTime
          }
        }
      }
    `)
            return output.users
        },
        userAppointments: async (_, { userEmail }, { prisma }) => {
            const output = await prisma
                .user({ email: userEmail })
                .$fragment(UserAppointments)
            return output.Appointments
        },

    },
    Mutation: {
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
                }
            )

            return createdUser
        },
        login: async (_, { input: { email, password } }, { prisma, jwt_secret }) => {
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