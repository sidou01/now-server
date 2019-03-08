import { } from 'dotenv/config'
import { ApolloServer } from 'apollo-server-express'
import schema from './schema/index'
import express from 'express'
import bodyParser from 'body-parser'
import { prisma } from './prisma-db/generated/prisma-client'
import jwt from 'jsonwebtoken'

const getUser = (token, secret) => {
  if (!token) return null
  const decoded = jwt.verify(token, secret)
  return decoded
}
const server = new ApolloServer({
  schema,
  context: ({ req }) => ({
    prisma,
    jwt_secret: process.env.JWT_SECRET,
    user: getUser(req.headers.authorization, process.env.JWT_SECRET)
  })
})
const app = new express()
server.applyMiddleware({ app })

app.use(bodyParser.json())

const port = 4000
//seperate route on the server that will render success or failure and a button to go back to the main app (client react app)
app.get('/email/confirmation/:token', async (req, res) => {
  console.log(process.env.SENDGRID_API_KEY)
  const decoded = jwt.verify(req.params.token, process.env.JWT_EMAIL_SECRET)
  const userFromDb = await prisma.updateUser({
    data: {
      confirmation: true
    },
    where: {
      email: decoded.userEmail
    }
  })
  if (userFromDb.email) return res.json('Email verified you can login now.')
  else
    return res.json(
      'error something went wrong with your email verification (maybe your email expired)'
    )
})

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
)
