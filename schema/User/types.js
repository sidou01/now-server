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
      hello: String!
      """
      Query user data (can be  used  in the profile page).
      """
      me: User!
      """
      Query user appointments (calendar page)
      """
      fetchUserAppointments(first: Int, skip:Int): [Appointment!]

      fetchServices(type: ServiceType!, first: Int, skip: Int): [Service!]
      searchService(query: String!): [Service!]

  }

  type Mutation {
    register(input: registerInput): User!
    """
    this mutation will return a token (String).
    token must be added to the headers for each protected request (authorization).
    Notice that you cannot get the token back if confirmation is still set to false.
    """
    login(input: loginInput): authPayload!


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

    """
    subscribe to confirmation field changing from false to true (should be used after creating a user) 
    """
    confirmationEnabled(userId: ID!): User!
  }

  type authPayload{
    success: Boolean!
    error: ErrorPayload
    token: String
    user: User
  }

  type ErrorPayload {
    msg: String!
    field: formFields!
  }

  enum formFields {
    EMAIL
    PASSWORD
  }
  input reviewServiceInput {
    serviceId: ID!
    title: String!
    content: String!
    rating: Int!
  }

  input scheduleAppointmentInput {
    serviceId: ID!
    title: String
    start: Date!
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
