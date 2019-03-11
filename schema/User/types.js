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
    sentMessages: [ClientMessage!]
    recievedMessages: [ServiceMessage!]
  }

  type Query {
      me: User!
      allUsers: [User!]!
  }
  type Mutation {
    register(input: registerInput): User!
    login(input: loginInput): String!
  }

  type Subscription {
    messageToClientAdded(clientId: ID!): ServiceMessage!
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
