module.exports = {
        typeDefs: /* GraphQL */ `type AggregateAppointment {
  count: Int!
}

type AggregateDoctor {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Appointment {
  id: ID!
  serviceId: Doctor!
  userId: User!
  title: String
  startTime: String!
  duration: AppointmentDuration!
}

type AppointmentConnection {
  pageInfo: PageInfo!
  edges: [AppointmentEdge]!
  aggregate: AggregateAppointment!
}

input AppointmentCreateInput {
  serviceId: DoctorCreateOneWithoutAppointmentsInput!
  userId: UserCreateOneWithoutAppointmentsInput!
  title: String
  startTime: String!
  duration: AppointmentDuration!
}

input AppointmentCreateManyWithoutServiceIdInput {
  create: [AppointmentCreateWithoutServiceIdInput!]
  connect: [AppointmentWhereUniqueInput!]
}

input AppointmentCreateManyWithoutUserIdInput {
  create: [AppointmentCreateWithoutUserIdInput!]
  connect: [AppointmentWhereUniqueInput!]
}

input AppointmentCreateWithoutServiceIdInput {
  userId: UserCreateOneWithoutAppointmentsInput!
  title: String
  startTime: String!
  duration: AppointmentDuration!
}

input AppointmentCreateWithoutUserIdInput {
  serviceId: DoctorCreateOneWithoutAppointmentsInput!
  title: String
  startTime: String!
  duration: AppointmentDuration!
}

enum AppointmentDuration {
  VERY_SHORT
  SHORT
  LONG
  VERY_LONG
}

type AppointmentEdge {
  node: Appointment!
  cursor: String!
}

enum AppointmentOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  startTime_ASC
  startTime_DESC
  duration_ASC
  duration_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AppointmentPreviousValues {
  id: ID!
  title: String
  startTime: String!
  duration: AppointmentDuration!
}

input AppointmentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  startTime: String
  startTime_not: String
  startTime_in: [String!]
  startTime_not_in: [String!]
  startTime_lt: String
  startTime_lte: String
  startTime_gt: String
  startTime_gte: String
  startTime_contains: String
  startTime_not_contains: String
  startTime_starts_with: String
  startTime_not_starts_with: String
  startTime_ends_with: String
  startTime_not_ends_with: String
  duration: AppointmentDuration
  duration_not: AppointmentDuration
  duration_in: [AppointmentDuration!]
  duration_not_in: [AppointmentDuration!]
  AND: [AppointmentScalarWhereInput!]
  OR: [AppointmentScalarWhereInput!]
  NOT: [AppointmentScalarWhereInput!]
}

type AppointmentSubscriptionPayload {
  mutation: MutationType!
  node: Appointment
  updatedFields: [String!]
  previousValues: AppointmentPreviousValues
}

input AppointmentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AppointmentWhereInput
  AND: [AppointmentSubscriptionWhereInput!]
  OR: [AppointmentSubscriptionWhereInput!]
  NOT: [AppointmentSubscriptionWhereInput!]
}

input AppointmentUpdateInput {
  serviceId: DoctorUpdateOneRequiredWithoutAppointmentsInput
  userId: UserUpdateOneRequiredWithoutAppointmentsInput
  title: String
  startTime: String
  duration: AppointmentDuration
}

input AppointmentUpdateManyDataInput {
  title: String
  startTime: String
  duration: AppointmentDuration
}

input AppointmentUpdateManyMutationInput {
  title: String
  startTime: String
  duration: AppointmentDuration
}

input AppointmentUpdateManyWithoutServiceIdInput {
  create: [AppointmentCreateWithoutServiceIdInput!]
  delete: [AppointmentWhereUniqueInput!]
  connect: [AppointmentWhereUniqueInput!]
  disconnect: [AppointmentWhereUniqueInput!]
  update: [AppointmentUpdateWithWhereUniqueWithoutServiceIdInput!]
  upsert: [AppointmentUpsertWithWhereUniqueWithoutServiceIdInput!]
  deleteMany: [AppointmentScalarWhereInput!]
  updateMany: [AppointmentUpdateManyWithWhereNestedInput!]
}

input AppointmentUpdateManyWithoutUserIdInput {
  create: [AppointmentCreateWithoutUserIdInput!]
  delete: [AppointmentWhereUniqueInput!]
  connect: [AppointmentWhereUniqueInput!]
  disconnect: [AppointmentWhereUniqueInput!]
  update: [AppointmentUpdateWithWhereUniqueWithoutUserIdInput!]
  upsert: [AppointmentUpsertWithWhereUniqueWithoutUserIdInput!]
  deleteMany: [AppointmentScalarWhereInput!]
  updateMany: [AppointmentUpdateManyWithWhereNestedInput!]
}

input AppointmentUpdateManyWithWhereNestedInput {
  where: AppointmentScalarWhereInput!
  data: AppointmentUpdateManyDataInput!
}

input AppointmentUpdateWithoutServiceIdDataInput {
  userId: UserUpdateOneRequiredWithoutAppointmentsInput
  title: String
  startTime: String
  duration: AppointmentDuration
}

input AppointmentUpdateWithoutUserIdDataInput {
  serviceId: DoctorUpdateOneRequiredWithoutAppointmentsInput
  title: String
  startTime: String
  duration: AppointmentDuration
}

input AppointmentUpdateWithWhereUniqueWithoutServiceIdInput {
  where: AppointmentWhereUniqueInput!
  data: AppointmentUpdateWithoutServiceIdDataInput!
}

input AppointmentUpdateWithWhereUniqueWithoutUserIdInput {
  where: AppointmentWhereUniqueInput!
  data: AppointmentUpdateWithoutUserIdDataInput!
}

input AppointmentUpsertWithWhereUniqueWithoutServiceIdInput {
  where: AppointmentWhereUniqueInput!
  update: AppointmentUpdateWithoutServiceIdDataInput!
  create: AppointmentCreateWithoutServiceIdInput!
}

input AppointmentUpsertWithWhereUniqueWithoutUserIdInput {
  where: AppointmentWhereUniqueInput!
  update: AppointmentUpdateWithoutUserIdDataInput!
  create: AppointmentCreateWithoutUserIdInput!
}

input AppointmentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  serviceId: DoctorWhereInput
  userId: UserWhereInput
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  startTime: String
  startTime_not: String
  startTime_in: [String!]
  startTime_not_in: [String!]
  startTime_lt: String
  startTime_lte: String
  startTime_gt: String
  startTime_gte: String
  startTime_contains: String
  startTime_not_contains: String
  startTime_starts_with: String
  startTime_not_starts_with: String
  startTime_ends_with: String
  startTime_not_ends_with: String
  duration: AppointmentDuration
  duration_not: AppointmentDuration
  duration_in: [AppointmentDuration!]
  duration_not_in: [AppointmentDuration!]
  AND: [AppointmentWhereInput!]
  OR: [AppointmentWhereInput!]
  NOT: [AppointmentWhereInput!]
}

input AppointmentWhereUniqueInput {
  id: ID
  startTime: String
}

type BatchPayload {
  count: Long!
}

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
  appointments(where: AppointmentWhereInput, orderBy: AppointmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Appointment!]
  specialty: DoctorSpecialty!
}

type DoctorConnection {
  pageInfo: PageInfo!
  edges: [DoctorEdge]!
  aggregate: AggregateDoctor!
}

input DoctorCreateInput {
  fullName: String!
  Bio: String
  email: String!
  password: String!
  age: Int
  phone: Int
  gender: Gender
  avatar: String
  appointments: AppointmentCreateManyWithoutServiceIdInput
  specialty: DoctorSpecialty!
}

input DoctorCreateOneWithoutAppointmentsInput {
  create: DoctorCreateWithoutAppointmentsInput
  connect: DoctorWhereUniqueInput
}

input DoctorCreateWithoutAppointmentsInput {
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

type DoctorEdge {
  node: Doctor!
  cursor: String!
}

enum DoctorOrderByInput {
  id_ASC
  id_DESC
  fullName_ASC
  fullName_DESC
  Bio_ASC
  Bio_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  age_ASC
  age_DESC
  phone_ASC
  phone_DESC
  gender_ASC
  gender_DESC
  avatar_ASC
  avatar_DESC
  specialty_ASC
  specialty_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DoctorPreviousValues {
  id: ID!
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

enum DoctorSpecialty {
  Generaliste
  Psychiatre
  Psychologue
  Dermatologue
  Dentiste
  Gynecologue
}

type DoctorSubscriptionPayload {
  mutation: MutationType!
  node: Doctor
  updatedFields: [String!]
  previousValues: DoctorPreviousValues
}

input DoctorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DoctorWhereInput
  AND: [DoctorSubscriptionWhereInput!]
  OR: [DoctorSubscriptionWhereInput!]
  NOT: [DoctorSubscriptionWhereInput!]
}

input DoctorUpdateInput {
  fullName: String
  Bio: String
  email: String
  password: String
  age: Int
  phone: Int
  gender: Gender
  avatar: String
  appointments: AppointmentUpdateManyWithoutServiceIdInput
  specialty: DoctorSpecialty
}

input DoctorUpdateManyMutationInput {
  fullName: String
  Bio: String
  email: String
  password: String
  age: Int
  phone: Int
  gender: Gender
  avatar: String
  specialty: DoctorSpecialty
}

input DoctorUpdateOneRequiredWithoutAppointmentsInput {
  create: DoctorCreateWithoutAppointmentsInput
  update: DoctorUpdateWithoutAppointmentsDataInput
  upsert: DoctorUpsertWithoutAppointmentsInput
  connect: DoctorWhereUniqueInput
}

input DoctorUpdateWithoutAppointmentsDataInput {
  fullName: String
  Bio: String
  email: String
  password: String
  age: Int
  phone: Int
  gender: Gender
  avatar: String
  specialty: DoctorSpecialty
}

input DoctorUpsertWithoutAppointmentsInput {
  update: DoctorUpdateWithoutAppointmentsDataInput!
  create: DoctorCreateWithoutAppointmentsInput!
}

input DoctorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  fullName: String
  fullName_not: String
  fullName_in: [String!]
  fullName_not_in: [String!]
  fullName_lt: String
  fullName_lte: String
  fullName_gt: String
  fullName_gte: String
  fullName_contains: String
  fullName_not_contains: String
  fullName_starts_with: String
  fullName_not_starts_with: String
  fullName_ends_with: String
  fullName_not_ends_with: String
  Bio: String
  Bio_not: String
  Bio_in: [String!]
  Bio_not_in: [String!]
  Bio_lt: String
  Bio_lte: String
  Bio_gt: String
  Bio_gte: String
  Bio_contains: String
  Bio_not_contains: String
  Bio_starts_with: String
  Bio_not_starts_with: String
  Bio_ends_with: String
  Bio_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  age: Int
  age_not: Int
  age_in: [Int!]
  age_not_in: [Int!]
  age_lt: Int
  age_lte: Int
  age_gt: Int
  age_gte: Int
  phone: Int
  phone_not: Int
  phone_in: [Int!]
  phone_not_in: [Int!]
  phone_lt: Int
  phone_lte: Int
  phone_gt: Int
  phone_gte: Int
  gender: Gender
  gender_not: Gender
  gender_in: [Gender!]
  gender_not_in: [Gender!]
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  appointments_every: AppointmentWhereInput
  appointments_some: AppointmentWhereInput
  appointments_none: AppointmentWhereInput
  specialty: DoctorSpecialty
  specialty_not: DoctorSpecialty
  specialty_in: [DoctorSpecialty!]
  specialty_not_in: [DoctorSpecialty!]
  AND: [DoctorWhereInput!]
  OR: [DoctorWhereInput!]
  NOT: [DoctorWhereInput!]
}

input DoctorWhereUniqueInput {
  id: ID
  email: String
}

enum Gender {
  MALE
  FEMALE
}

scalar Long

type Mutation {
  createAppointment(data: AppointmentCreateInput!): Appointment!
  updateAppointment(data: AppointmentUpdateInput!, where: AppointmentWhereUniqueInput!): Appointment
  updateManyAppointments(data: AppointmentUpdateManyMutationInput!, where: AppointmentWhereInput): BatchPayload!
  upsertAppointment(where: AppointmentWhereUniqueInput!, create: AppointmentCreateInput!, update: AppointmentUpdateInput!): Appointment!
  deleteAppointment(where: AppointmentWhereUniqueInput!): Appointment
  deleteManyAppointments(where: AppointmentWhereInput): BatchPayload!
  createDoctor(data: DoctorCreateInput!): Doctor!
  updateDoctor(data: DoctorUpdateInput!, where: DoctorWhereUniqueInput!): Doctor
  updateManyDoctors(data: DoctorUpdateManyMutationInput!, where: DoctorWhereInput): BatchPayload!
  upsertDoctor(where: DoctorWhereUniqueInput!, create: DoctorCreateInput!, update: DoctorUpdateInput!): Doctor!
  deleteDoctor(where: DoctorWhereUniqueInput!): Doctor
  deleteManyDoctors(where: DoctorWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  appointment(where: AppointmentWhereUniqueInput!): Appointment
  appointments(where: AppointmentWhereInput, orderBy: AppointmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Appointment]!
  appointmentsConnection(where: AppointmentWhereInput, orderBy: AppointmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AppointmentConnection!
  doctor(where: DoctorWhereUniqueInput!): Doctor
  doctors(where: DoctorWhereInput, orderBy: DoctorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Doctor]!
  doctorsConnection(where: DoctorWhereInput, orderBy: DoctorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DoctorConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  appointment(where: AppointmentSubscriptionWhereInput): AppointmentSubscriptionPayload
  doctor(where: DoctorSubscriptionWhereInput): DoctorSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
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
  Appointments(where: AppointmentWhereInput, orderBy: AppointmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Appointment!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  fullName: String!
  email: String!
  password: String!
  age: Int!
  phone: Int
  gender: Gender
  avatar: String
  confirmation: Boolean
  Appointments: AppointmentCreateManyWithoutUserIdInput
}

input UserCreateOneWithoutAppointmentsInput {
  create: UserCreateWithoutAppointmentsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAppointmentsInput {
  fullName: String!
  email: String!
  password: String!
  age: Int!
  phone: Int
  gender: Gender
  avatar: String
  confirmation: Boolean
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  fullName_ASC
  fullName_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  age_ASC
  age_DESC
  phone_ASC
  phone_DESC
  gender_ASC
  gender_DESC
  avatar_ASC
  avatar_DESC
  confirmation_ASC
  confirmation_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  fullName: String!
  email: String!
  password: String!
  age: Int!
  phone: Int
  gender: Gender
  avatar: String
  confirmation: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  fullName: String
  email: String
  password: String
  age: Int
  phone: Int
  gender: Gender
  avatar: String
  confirmation: Boolean
  Appointments: AppointmentUpdateManyWithoutUserIdInput
}

input UserUpdateManyMutationInput {
  fullName: String
  email: String
  password: String
  age: Int
  phone: Int
  gender: Gender
  avatar: String
  confirmation: Boolean
}

input UserUpdateOneRequiredWithoutAppointmentsInput {
  create: UserCreateWithoutAppointmentsInput
  update: UserUpdateWithoutAppointmentsDataInput
  upsert: UserUpsertWithoutAppointmentsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutAppointmentsDataInput {
  fullName: String
  email: String
  password: String
  age: Int
  phone: Int
  gender: Gender
  avatar: String
  confirmation: Boolean
}

input UserUpsertWithoutAppointmentsInput {
  update: UserUpdateWithoutAppointmentsDataInput!
  create: UserCreateWithoutAppointmentsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  fullName: String
  fullName_not: String
  fullName_in: [String!]
  fullName_not_in: [String!]
  fullName_lt: String
  fullName_lte: String
  fullName_gt: String
  fullName_gte: String
  fullName_contains: String
  fullName_not_contains: String
  fullName_starts_with: String
  fullName_not_starts_with: String
  fullName_ends_with: String
  fullName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  age: Int
  age_not: Int
  age_in: [Int!]
  age_not_in: [Int!]
  age_lt: Int
  age_lte: Int
  age_gt: Int
  age_gte: Int
  phone: Int
  phone_not: Int
  phone_in: [Int!]
  phone_not_in: [Int!]
  phone_lt: Int
  phone_lte: Int
  phone_gt: Int
  phone_gte: Int
  gender: Gender
  gender_not: Gender
  gender_in: [Gender!]
  gender_not_in: [Gender!]
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  confirmation: Boolean
  confirmation_not: Boolean
  Appointments_every: AppointmentWhereInput
  Appointments_some: AppointmentWhereInput
  Appointments_none: AppointmentWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    