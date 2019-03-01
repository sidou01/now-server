import { gql } from 'apollo-server'

/*
1- Sub to a post and get comments back
2- Pagination for users and posts and comments
3- Add facebook/google auth (not mandatory)
*/

const typeDefs = gql`
  type Query {
    hello: String!
  }
  type Mutation {
    register(
      fullName: String!
      email: String!
      age: String!
      phone: Int
      avtar: String
    ): User!
    login(email: String!, password: String!): String!
  }

  type User {
    id: ID!
    fullName: String!
    email: String!
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
    type: ServiceType!
    email: String!
    Birthday: String!
    phone: Int
    gender: Gender
    avatar: String
    Appointments: [Appointment!]
  }

  type Appointment {
    id: ID!
    serviceId: Service!
    userId: User!
    date: AppointmentDate!
    sessions: Int!
  }

  enum ServiceType {
    Doctor
    LAWYER
  }
  type AppointmentDate {
    day: String!
    startTime: String!
    endTime: String!
  }
  enum Gender {
    MALE
    FEMALE
  }
`
export default typeDefs
