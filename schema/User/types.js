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
    reviews: [Review!]!
  }

  type Query {
      me: User!
      allUsers: [User!]!
      userAppointments(userId: ID!): [Appointment!]
  }
  type Mutation {
    register(input: registerInput): User!
    login(input: loginInput): String!


    scheduleAppointment(input: scheduleAppointmentInput): Appointment!
    cancelAppointment(appointmentId: ID!): Appointment!
    sendMessageToService(serviceId: ID!, subject: String, body: String!): ClientMessage!

    reviewService(input: reviewServiceInput): Review!
  }

  type Subscription {
    messageToClientAdded: ServiceMessage!
  }

  input reviewServiceInput {
    serviceId: ID!
    title: String!
    content: String!
    rating: Int!
  }

  input scheduleAppointmentInput {
    serviceId: ID!
    clientId: ID!
    title: String
    startTime: Date!
    duration: AppointmentDuration!
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
