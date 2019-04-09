import { mergeTypes } from 'merge-graphql-schemas'
import { mergeResolvers } from 'merge-graphql-schemas'
import { makeExecutableSchema } from 'graphql-tools'

import appointmentType from './Appointment/types'
import userType from './User/types'
import userResolvers from './User/resolvers'

import doctorType from './Service/types'
import doctorResolvers from './Service/resolvers'
import appointmentResolvers from './Appointment/resolvers'

import reviewType from './Reviews/types'
import reviewResolvers from './Reviews/resolvers'

const commonTypes = `

    type ClientMessage {
        id: ID!
        sender: User!
        reciever: Service!
        subject: String!
        body: String!
    }

    type ServiceMessage {
        id: ID!
        sender: Service!
        reciever: User!
        subject: String!
        body: String!
    }
`
const typeDefsArray = [
  commonTypes,
  userType,
  doctorType,
  appointmentType,
  reviewType,
]

const resolversArray = [
  userResolvers,
  doctorResolvers,
  appointmentResolvers,
  reviewResolvers,
]

const typeDefs = mergeTypes(typeDefsArray)
const resolvers = mergeResolvers(resolversArray)

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
