export default `

type Service {
  id: ID!
  fullName: String!
  Bio: String
  email: String!
  password: String!
  age: Int
  phone: Int
  address: String
  gender: Gender
  avatar: String
  appointments: [Appointment!]
  sentMessages: [ServiceMessage!]
  recievedMessages: [ClientMessage!]
  reviews: [Review!]
  office_hours: String
  education: String
  serviceType: ServiceType!

  doctorField: DoctorField
  lawyerField: LawyerField
}



  enum DoctorField {
    Generaliste
    Psychiatre
    Psychologue
    Dermatologue
    Dentiste
    Gynecologue
  }

  enum LawyerField {
    Bankruptcy_Law
    Corporate_Law
    Civil_Rights_Law
    Criminal_Law
    Family_Law
  }

  type Query {
    """
    Query service appointments (can be used in the profile page of the desktop app)
    """
    fetchServiceAppointments: [Appointment!]!
    serviceReviews(first: Int, skip: Int): [Review!]
    fetchServicesByType(type: ServiceType!, first: Int, skip: Int): [Service!]
    fetchAllServices(first: Int, skip: Int): [Service!]
    fetchService(serviceId: ID!): Service!
  }

  type Mutation {
    """
    this mutation will return a token (String).
    token must be added to the headers for each protected request (authorization)
    """
    loginService(input: loginInput): String!
    """
    this mutation should only be executed by admins.
    """
    addService(input: addServiceType): Service!

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

  input addServiceType {
    fullName: String!
    Bio: String
    email: String!
    password: String!
    age: Int
    phone: Int
    gender: Gender
    avatar: String
    doctorField: DoctorField
    lawyerField: LawyerField
    type: ServiceType!
  }

  input localAppointmentInput {
    serviceId: ID!
    clientName: String!
    title: String
    startTime: Date!
    duration: AppointmentDuration!
  }
  enum ServiceType {
    Doctor
    Lawyer
  }
`
