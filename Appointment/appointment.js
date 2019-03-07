export const typeDef = `
  type Appointment {
    id: ID!
    service: Doctor!
    client: User!
    title: String
    startTime: Date!
    endTime: Date
    duration: AppointmentDuration!
  }

  enum AppointmentDuration {
    VERY_SHORT #15m
    SHORT #30m
    LONG #45m
    VERY_LONG #1h
  }

  extend type Query {
    userAppointments(userEmail: String!): [Appointment!]
  }
  extend type Mutation {
    scheduleAppointment(input: scheduleAppointmentInput): Appointment!
  }
`
