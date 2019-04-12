import { mergeTypes } from "merge-graphql-schemas"
import { mergeResolvers } from "merge-graphql-schemas"
import { makeExecutableSchema } from "graphql-tools"

import appointmentTypes from "./Appointment/types"
import appointmentResolvers from "./Appointment/resolvers"

import userTypes from "./User/types"
import userResolvers from "./User/resolvers"

import serviceTypes from "./Service/types"
import serviceResolvers from "./Service/resolvers"

import reviewTypes from "./Reviews/types"
import reviewResolvers from "./Reviews/resolvers"

import messageTypes from "./Messages/types"
import messageResolvers from "./Messages/resolvers"

const typeDefsArray = [
  userTypes,
  serviceTypes,
  appointmentTypes,
  reviewTypes,
  messageTypes
]

const resolversArray = [
  userResolvers,
  serviceResolvers,
  appointmentResolvers,
  reviewResolvers,
  messageResolvers
]

const typeDefs = mergeTypes(typeDefsArray)
const resolvers = mergeResolvers(resolversArray)

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
