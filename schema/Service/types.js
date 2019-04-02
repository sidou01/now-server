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
    allDoctors: [Doctor!]!
    doctorAppointments(email: String!): [Appointment!]!
  }

  type Mutation {
    loginDoctor(input: loginInput): String!
    addDoctor(input: addDoctorInput): Doctor!

    sendMessageToClient(clientId: ID!, subject: String, body: String!): ServiceMessage!
    scheduleLocalAppointment(input: localAppointmentInput): Appointment!
  }

  type Subscription {
    messageToServiceAdded: ClientMessage!
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
