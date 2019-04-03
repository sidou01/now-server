import {} from "dotenv/config"
import { ApolloServer } from "apollo-server-express"
import http from "http"
import schema from "./schema/index"
import express from "express"
import bodyParser from "body-parser"
import { prisma } from "./prisma-db/generated/prisma-client"
import jwt from "jsonwebtoken"
import { PubSub } from "graphql-subscriptions"

export const pubsub = new PubSub()
const PORT = 4000

const getUser = (token, secret) => {
  if (!token) return null
  const decoded = jwt.verify(token, secret)
  return decoded
}
const server = new ApolloServer({
  schema,
  subscriptions: {
    onConnect: (connectionParams, webSocket) => {
      if (connectionParams.authorization) {
        const user = getUser(
          connectionParams.authorization,
          process.env.JWT_SECRET
        )
        return {
          user
        }
      }

      throw new Error("Missing auth token!")
    }
  },
  context: ({ req, connection }) => {
    //websocket connection
    if (connection) {
      return {
        prisma,
        jwt_secret: process.env.JWT_SECRET,
        pubsub,
        user: connection.context.user
      }
    }
    //HTTP connection
    const user = getUser(req.headers.authorization, process.env.JWT_SECRET)
    return {
      prisma,
      jwt_secret: process.env.JWT_SECRET,
      user,
      pubsub
    }
  }
})

const app = new express()
app.use(bodyParser.json())

server.applyMiddleware({ app })

const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

//seperate route on the server that will render success or failure and a button to go back to the main app (client react app)
app.get("/email/confirmation/:token", async (req, res) => {
  const decoded = jwt.verify(req.params.token, process.env.JWT_EMAIL_SECRET)
  const userFromDb = await prisma.updateUser({
    data: {
      confirmation: true
    },
    where: {
      email: decoded.userEmail
    }
  })
  if (userFromDb.email) return res.json("Email verified you can login now.")
  else
    return res.json(
      "error something went wrong with your email verification (maybe your email expired)"
    )
})

httpServer.listen(PORT, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${
      server.subscriptionsPath
    }`
  )
})
