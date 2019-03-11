import { mergeTypes } from 'merge-graphql-schemas'
import { mergeResolvers } from 'merge-graphql-schemas'
import { makeExecutableSchema } from 'graphql-tools'

import appointmentType from './Appointment/types'
import userType from './User/types'
import doctorType from './Service/types'

import userResolvers from './User/resolvers'
import doctorResolvers from './Service/resolvers'
import appointmentResolvers from './Appointment/resolvers'

const commonTypes = `
    type ClientMessage {
        id: ID!
        sender: User!
        reciever: Doctor!
        subject: String!
        body: String!
    }

    type ServiceMessage {
        id: ID!
        sender: Doctor!
        reciever: User!
        subject: String!
        body: String!
    }
`
const typeDefsArray = [commonTypes, userType, doctorType, appointmentType]

const resolversArray = [userResolvers, doctorResolvers, appointmentResolvers]

const typeDefs = mergeTypes(typeDefsArray)
const resolvers = mergeResolvers(resolversArray)

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
