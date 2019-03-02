import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    me: User
  }
  type Mutation {
    register(
      fullName: String!
      email: String!
      password: String!
      age: Int!
      phone: Int
      avatar: String
      gender: Gender
    ): User!
    login(email: String!, password: String!): String!
  }

  type User {
    id: ID!
    fullName: String!
    email: String!
    password: String!
    age: Int!
    phone: Int
    gender: Gender
    avatar: String
    Appointments: [Appointment!]
  }

  type Service {
    id: ID!
    fullName: String!
    Bio: String
    email: String!
    password: String!
    Birthday: String!
    phone: Int
    gender: Gender
    avatar: String
    Appointments: [Appointment!]
    type: ServiceType!
  }

  type Appointment {
    id: ID!
    serviceId: Service!
    userId: User!
    day: String!
    startTime: String!
    endTime: String!
    type: AppointmentType!
  }

  enum AppointmentType {
    VERY_SHORT #15m
    SHORT #30m
    LONG #1h
  }

  enum Gender {
    MALE
    FEMALE
  }
  enum ServiceType {
    DOCTOR
    LAWYER
  }
`
export default typeDefs
