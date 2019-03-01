//import {} from 'dotenv/config'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { ApolloServer, SchemaError } from 'apollo-server-express'
import express from 'express'
import bodyParser from 'body-parser'

const server = new ApolloServer({
  typeDefs,
  resolvers
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
