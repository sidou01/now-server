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
      userAppointments(userId: ID!): [Appointment!]
      cancelAppointment(serviceId: ID!): Appointment!
  }
  type Mutation {
    register(input: registerInput): User!
    login(input: loginInput): String!
    
    sendMessageToService(serviceId: ID!, subject: String, body: String!): ClientMessage!
  }

  type Subscription {
    messageToClientAdded: ServiceMessage!
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
