export default `
  scalar Date
  type Appointment {
    id: ID!
    service: Doctor!
    client: User
    clientName: String
    title: String
    startTime: Date!
    endTime: Date
    duration: AppointmentDuration!
    local: Boolean!
  }

  enum AppointmentDuration {
    VERY_SHORT #15m
    SHORT #30m
    LONG #45m
    VERY_LONG #1h
  }

  type Mutation {
    scheduleAppointment(input: scheduleAppointmentInput): Appointment!
  }

  input scheduleAppointmentInput {
    serviceId: ID!
    clientId: ID!
    title: String
    startTime: Date!
    duration: AppointmentDuration!
  }
`