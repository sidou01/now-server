import { mergeTypes } from 'merge-graphql-schemas';
import { mergeResolvers } from 'merge-graphql-schemas'
import { makeExecutableSchema } from 'graphql-tools';

import appointmentType from './Appointment/types'
import userType from './User/types'
import doctorType from './Service/types'

import userResolvers from './User/resolvers'
import doctorResolvers from './Service/resolvers'
import appointmentResolvers from './Appointment/resolvers'

const typeDefsArray = [
    userType,
    doctorType,
    appointmentType
]

const resolversArray = [
    userResolvers,
    doctorResolvers,
    appointmentResolvers
]

const typeDefs = mergeTypes(typeDefsArray)
const resolvers = mergeResolvers(resolversArray)

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema