export default `
  type Doctor {
    id: ID!
    fullName: String!
    Bio: String
    email: String!
    password: String!
    age: Int
    phone: Int
    gender: Gender
    avatar: String
    appointments: [Appointment!]
    specialty: DoctorSpecialty!
    sentMessages: [ServiceMessage!]
    recievedMessages: [ClientMessage!]
    reviews: [Review!]!
  }


  enum DoctorSpecialty {
    Generaliste
    Psychiatre
    Psychologue
    Dermatologue
    Dentiste
    Gynecologue
  }

  type Query {
    """
    this query is only used for testing and will be deleted in production.
    """
    allDoctors: [Doctor!]! @deprecated
    """
    Query service appointments (can be used in the profile page of the desktop app)
    """
    doctorAppointments: [Appointment!]!
    doctorReviews(first: Int, skip: Int): [Review!]
  }

  type Mutation {
    """
    this mutation will return a token (String).
    token must be added to the headers for each protected request (authorization)
    """
    loginDoctor(input: loginInput): String!
    """
    this mutation should only be executed by admins.
    """
    addDoctor(input: addDoctorInput): Doctor!

    """
    Sends a message to a client. This message will be returned in the subscription messageToClientAdded (client subscription).
    """

    sendMessageToClient(clientId: ID!, subject: String, body: String!): ServiceMessage!

    """
    This mutation should only be executed in the desktop app.
    Notice that this mutation should not be confounded with scheduleAppointment.
    """

    scheduleLocalAppointment(input: localAppointmentInput): Appointment!
  }

  type Subscription {
    """
    listen for messages from clients (for notifications)
    """
    messageToServiceAdded: ClientMessage!
    """
    listen for appointments from clients (for notifications)
    """
    appointmentRecieved: Appointment!
    """
    listen for reviews from clients (for notifications)
    """
    reviewRecieved: Review!
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

  input localAppointmentInput {
    serviceId: ID!
    clientName: String!
    title: String
    startTime: Date!
    duration: AppointmentDuration!
  }
`
