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
    #Appointments: [Appointment!]
  }
  enum Gender {
    MALE
    FEMALE
  }
`
export default typeDefs
