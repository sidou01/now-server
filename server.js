import {} from 'dotenv/config'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { ApolloServer, SchemaError } from 'apollo-server-express'
import express from 'express'
import bodyParser from 'body-parser'
import { prisma } from './prisma-db/generated/prisma-client'
import jwt from 'jsonwebtoken'
console.log(process.env.JWT_SECRET)

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

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
)
