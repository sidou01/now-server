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
      """
      Query user data (can be  used  in the profile page).
      """
      me: User!
      """
      Query user appointments (calendar page)
      """
      fetchUserAppointments(first: Int, skip:Int): [Appointment!]

      fetchServices(type: ServiceType!, first: Int, skip: Int): [Service!]
      fetchSentMessages(first: Int, skip: Int): [ClientMessage!]
      fetchRecievedMessages(first: Int, skip: Int): [ServiceMessage!]

  }

  type Mutation {
    register(input: registerInput): User!
    """
    this mutation will return a token (String).
    token must be added to the headers for each protected request (authorization).
    Notice that you cannot get the token back if confirmation is still set to false.
    """
    login(input: loginInput): String!


    scheduleAppointment(input: scheduleAppointmentInput): Appointment!
    """
    The cancel appointment mutation can be executed less than 10 minutes from the scheduleAppointment mutation.
    """
    cancelAppointment(appointmentId: ID!): Appointment!
    """
    Sends a message to a service. This message will be returned in the subscription messageToServiceAdded (service subscription).
    """
    sendMessageToService(serviceId: ID!, subject: String, body: String!): ClientMessage!

    reviewService(input: reviewServiceInput): Review!
  }

  type Subscription {
    """
    listen for messages from services (for notifications)
    """
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
