import { typeDef as User } from './User/user'
import { typeDef as Doctor } from './Service/doctor'
import { typeDef as Appointment } from './Appointment/appointment'
import resolvers from './resolvers'
import { makeExecutableSchema } from 'graphql-tools'

const Mutation = `
  type Mutation {
      sayMyName(name: String!): String!
  }
`
const Query = `
  scalar Date
  type Query {
      whatIsThis: String!
  }
  input scheduleAppointmentInput {
    serviceId: ID!
    clientId: ID!
    title: String
    startTime: Date!
    duration: AppointmentDuration!
  }
  input addDoctorInput {
    fullName: String!
    Bio: String
    email: String!
    password: String!
    age: Int
    phone: Int
    gender: Gender
    avatar: String
    specialty: DoctorSpecialty!
  }
  input registerInput {
    fullName: String!
    email: String!
    password: String!
    age: Int!
    phone: Int
    avatar: String
    gender: Gender
  }
  input loginInput {
    email: String!
    password: String!
  }
  enum Gender {
    MALE
    FEMALE
  }
`

const schema = makeExecutableSchema({
  typeDefs: [Query, Mutation, User, Doctor, Appointment],
  resolvers
})

export default schema
