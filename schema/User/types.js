export default `
  type User {
    id: ID!
    fullName: String!
    email: String!
    password: String!
    age: Int!
    phone: Int
    gender: Gender
    avatar: String
    confirmation: Boolean!
    Appointments: [Appointment!]
  }

  extend type Query {
      me: User!
      allUsers: [User!]!
  }
  extend type Mutation {
    register(input: registerInput): User!
    login(input: loginInput): String!
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