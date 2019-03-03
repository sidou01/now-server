import {} from 'dotenv/config'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { ApolloServer, SchemaError } from 'apollo-server-express'
import express from 'express'
import bodyParser from 'body-parser'
import { prisma } from './prisma-db/generated/prisma-client'
import jwt from 'jsonwebtoken'

export const SENDGRID_API_KEY =
  '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'

const getUser = (token, secret) => {
  if (!token) return null
  const decoded = jwt.verify(token, secret)
  return decoded
}
const server = new ApolloServer({
  typeDefs,
  resolvers,
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
//sendgrid confirmation:

app.get('/email/confirmation/:token', async (req, res) => {
  const decoded = jwt.verify(req.params.token, process.env.JWT_EMAIL_SECRET)
  const userFromDb = await prisma.updateUser({
    data: {
      confirmation: true
    },
    where: {
      email: decoded.userEmail
    }
  })
  if (userFromDb.email) {
    console.log(userFromDb)
    res.redirect('/app/login')
  } else
    return res.json(
      'error something went wrong with your email verification (maybe your email expired)'
    )
})

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
)
