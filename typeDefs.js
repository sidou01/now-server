import { gql } from 'apollo-server'

const typeDefs = gql`
  scalar Date
  type Query {
    me: User
    allDoctors: [Doctor!]!
  }
  type Mutation {
    register(
      fullName: String!
      email: String!
      password: String!
      age: Int!
      phone: Int
      avatar: String
      gender: Gender
    ): User!
    login(email: String!, password: String!): String!
    loginDoctor(email: String!, password: String!): String!
    addDoctor(
      fullName: String!
      Bio: String
      email: String!
      password: String!
      age: Int
      phone: Int
      gender: Gender
      avatar: String
      specialty: DoctorSpecialty!
    ): Doctor!
    scheduleAppointment(
      serviceId: ID!
      userId: ID!
      title: String
      startTime: Date!
      duration: AppointmentDuration!
    ): Appointment!
  }

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
  }
  type Doctor {
    id: ID!
    fullName: String!
    Bio: String
    email: String!
    password: String!
    age: Int!
    phone: Int
    gender: Gender
    avatar: String
    appointments: [Appointment!]
    specialty: DoctorSpecialty!
  }
  type Appointment {
    id: ID!
    serviceId: Doctor!
    userId: User!
    title: String
    startTime: Date!
    duration: AppointmentDuration!
  }
  enum DoctorSpecialty {
    Generaliste
    Psychiatre
    Psychologue
    Dermatologue
    Dentiste
    Gynecologue
  }
  enum Gender {
    MALE
    FEMALE
  }
  enum AppointmentDuration {
    VERY_SHORT #15m
    SHORT #30m
    LONG #1h
    VERY_LONG #1h 30m
  }
`
export default typeDefs
