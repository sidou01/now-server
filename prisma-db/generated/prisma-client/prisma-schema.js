module.exports = {
        typeDefs: /* GraphQL */ `type AggregateAppointment {
  count: Int!
}

type AggregateAppointmentDate {
  count: Int!
}

type AggregateService {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Appointment {
  id: ID!
  serviceId: Service!
  userId: User!
  date: AppointmentDate!
  sessions: Int!
}

type AppointmentConnection {
  pageInfo: PageInfo!
  edges: [AppointmentEdge]!
  aggregate: AggregateAppointment!
}

input AppointmentCreateInput {
  serviceId: ServiceCreateOneWithoutAppointmentsInput!
  userId: UserCreateOneWithoutAppointmentsInput!
  date: AppointmentDateCreateOneInput!
  sessions: Int!
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
  date: AppointmentDateCreateOneInput!
  sessions: Int!
}

input AppointmentCreateWithoutUserIdInput {
  serviceId: ServiceCreateOneWithoutAppointmentsInput!
  date: AppointmentDateCreateOneInput!
  sessions: Int!
}

type AppointmentDate {
  day: String!
  startTime: DateTime!
  endTime: DateTime!
}

type AppointmentDateConnection {
  pageInfo: PageInfo!
  edges: [AppointmentDateEdge]!
  aggregate: AggregateAppointmentDate!
}

input AppointmentDateCreateInput {
  day: String!
  startTime: DateTime!
  endTime: DateTime!
}

input AppointmentDateCreateOneInput {
  create: AppointmentDateCreateInput
}

type AppointmentDateEdge {
  node: AppointmentDate!
  cursor: String!
}

enum AppointmentDateOrderByInput {
  day_ASC
  day_DESC
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AppointmentDatePreviousValues {
  day: String!
  startTime: DateTime!
  endTime: DateTime!
}

type AppointmentDateSubscriptionPayload {
  mutation: MutationType!
  node: AppointmentDate
  updatedFields: [String!]
  previousValues: AppointmentDatePreviousValues
}

input AppointmentDateSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AppointmentDateWhereInput
  AND: [AppointmentDateSubscriptionWhereInput!]
  OR: [AppointmentDateSubscriptionWhereInput!]
  NOT: [AppointmentDateSubscriptionWhereInput!]
}

input AppointmentDateUpdateDataInput {
  day: String
  startTime: DateTime
  endTime: DateTime
}

input AppointmentDateUpdateManyMutationInput {
  day: String
  startTime: DateTime
  endTime: DateTime
}

input AppointmentDateUpdateOneRequiredInput {
  create: AppointmentDateCreateInput
  update: AppointmentDateUpdateDataInput
  upsert: AppointmentDateUpsertNestedInput
}

input AppointmentDateUpsertNestedInput {
  update: AppointmentDateUpdateDataInput!
  create: AppointmentDateCreateInput!
}

input AppointmentDateWhereInput {
  day: String
  day_not: String
  day_in: [String!]
  day_not_in: [String!]
  day_lt: String
  day_lte: String
  day_gt: String
  day_gte: String
  day_contains: String
  day_not_contains: String
  day_starts_with: String
  day_not_starts_with: String
  day_ends_with: String
  day_not_ends_with: String
  startTime: DateTime
  startTime_not: DateTime
  startTime_in: [DateTime!]
  startTime_not_in: [DateTime!]
  startTime_lt: DateTime
  startTime_lte: DateTime
  startTime_gt: DateTime
  startTime_gte: DateTime
  endTime: DateTime
  endTime_not: DateTime
  endTime_in: [DateTime!]
  endTime_not_in: [DateTime!]
  endTime_lt: DateTime
  endTime_lte: DateTime
  endTime_gt: DateTime
  endTime_gte: DateTime
  AND: [AppointmentDateWhereInput!]
  OR: [AppointmentDateWhereInput!]
  NOT: [AppointmentDateWhereInput!]
}

type AppointmentEdge {
  node: Appointment!
  cursor: String!
}

enum AppointmentOrderByInput {
  id_ASC
  id_DESC
  sessions_ASC
  sessions_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AppointmentPreviousValues {
  id: ID!
  sessions: Int!
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
  sessions: Int
  sessions_not: Int
  sessions_in: [Int!]
  sessions_not_in: [Int!]
  sessions_lt: Int
  sessions_lte: Int
  sessions_gt: Int
  sessions_gte: Int
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
  serviceId: ServiceUpdateOneRequiredWithoutAppointmentsInput
  userId: UserUpdateOneRequiredWithoutAppointmentsInput
  date: AppointmentDateUpdateOneRequiredInput
  sessions: Int
}

input AppointmentUpdateManyDataInput {
  sessions: Int
}

input AppointmentUpdateManyMutationInput {
  sessions: Int
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
  date: AppointmentDateUpdateOneRequiredInput
  sessions: Int
}

input AppointmentUpdateWithoutUserIdDataInput {
  serviceId: ServiceUpdateOneRequiredWithoutAppointmentsInput
  date: AppointmentDateUpdateOneRequiredInput
  sessions: Int
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
  serviceId: ServiceWhereInput
  userId: UserWhereInput
  date: AppointmentDateWhereInput
  sessions: Int
  sessions_not: Int
  sessions_in: [Int!]
  sessions_not_in: [Int!]
  sessions_lt: Int
  sessions_lte: Int
  sessions_gt: Int
  sessions_gte: Int
  AND: [AppointmentWhereInput!]
  OR: [AppointmentWhereInput!]
  NOT: [AppointmentWhereInput!]
}

input AppointmentWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar DateTime

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
  createAppointmentDate(data: AppointmentDateCreateInput!): AppointmentDate!
  updateManyAppointmentDates(data: AppointmentDateUpdateManyMutationInput!, where: AppointmentDateWhereInput): BatchPayload!
  deleteManyAppointmentDates(where: AppointmentDateWhereInput): BatchPayload!
  createService(data: ServiceCreateInput!): Service!
  updateService(data: ServiceUpdateInput!, where: ServiceWhereUniqueInput!): Service
  updateManyServices(data: ServiceUpdateManyMutationInput!, where: ServiceWhereInput): BatchPayload!
  upsertService(where: ServiceWhereUniqueInput!, create: ServiceCreateInput!, update: ServiceUpdateInput!): Service!
  deleteService(where: ServiceWhereUniqueInput!): Service
  deleteManyServices(where: ServiceWhereInput): BatchPayload!
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
  appointmentDates(where: AppointmentDateWhereInput, orderBy: AppointmentDateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AppointmentDate]!
  appointmentDatesConnection(where: AppointmentDateWhereInput, orderBy: AppointmentDateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AppointmentDateConnection!
  service(where: ServiceWhereUniqueInput!): Service
  services(where: ServiceWhereInput, orderBy: ServiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Service]!
  servicesConnection(where: ServiceWhereInput, orderBy: ServiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ServiceConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Service {
  id: ID!
  fullName: String!
  Bio: String
  type: ServiceType!
  email: String!
  password: String!
  Birthday: DateTime!
  phone: Int
  gender: Gender
  avatar: String
  Appointments(where: AppointmentWhereInput, orderBy: AppointmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Appointment!]
}

type ServiceConnection {
  pageInfo: PageInfo!
  edges: [ServiceEdge]!
  aggregate: AggregateService!
}

input ServiceCreateInput {
  fullName: String!
  Bio: String
  type: ServiceType!
  email: String!
  password: String!
  Birthday: DateTime!
  phone: Int
  gender: Gender
  avatar: String
  Appointments: AppointmentCreateManyWithoutServiceIdInput
}

input ServiceCreateOneWithoutAppointmentsInput {
  create: ServiceCreateWithoutAppointmentsInput
  connect: ServiceWhereUniqueInput
}

input ServiceCreateWithoutAppointmentsInput {
  fullName: String!
  Bio: String
  type: ServiceType!
  email: String!
  password: String!
  Birthday: DateTime!
  phone: Int
  gender: Gender
  avatar: String
}

type ServiceEdge {
  node: Service!
  cursor: String!
}

enum ServiceOrderByInput {
  id_ASC
  id_DESC
  fullName_ASC
  fullName_DESC
  Bio_ASC
  Bio_DESC
  type_ASC
  type_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  Birthday_ASC
  Birthday_DESC
  phone_ASC
  phone_DESC
  gender_ASC
  gender_DESC
  avatar_ASC
  avatar_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ServicePreviousValues {
  id: ID!
  fullName: String!
  Bio: String
  type: ServiceType!
  email: String!
  password: String!
  Birthday: DateTime!
  phone: Int
  gender: Gender
  avatar: String
}

type ServiceSubscriptionPayload {
  mutation: MutationType!
  node: Service
  updatedFields: [String!]
  previousValues: ServicePreviousValues
}

input ServiceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ServiceWhereInput
  AND: [ServiceSubscriptionWhereInput!]
  OR: [ServiceSubscriptionWhereInput!]
  NOT: [ServiceSubscriptionWhereInput!]
}

enum ServiceType {
  Doctor
  LAWYER
}

input ServiceUpdateInput {
  fullName: String
  Bio: String
  type: ServiceType
  email: String
  password: String
  Birthday: DateTime
  phone: Int
  gender: Gender
  avatar: String
  Appointments: AppointmentUpdateManyWithoutServiceIdInput
}

input ServiceUpdateManyMutationInput {
  fullName: String
  Bio: String
  type: ServiceType
  email: String
  password: String
  Birthday: DateTime
  phone: Int
  gender: Gender
  avatar: String
}

input ServiceUpdateOneRequiredWithoutAppointmentsInput {
  create: ServiceCreateWithoutAppointmentsInput
  update: ServiceUpdateWithoutAppointmentsDataInput
  upsert: ServiceUpsertWithoutAppointmentsInput
  connect: ServiceWhereUniqueInput
}

input ServiceUpdateWithoutAppointmentsDataInput {
  fullName: String
  Bio: String
  type: ServiceType
  email: String
  password: String
  Birthday: DateTime
  phone: Int
  gender: Gender
  avatar: String
}

input ServiceUpsertWithoutAppointmentsInput {
  update: ServiceUpdateWithoutAppointmentsDataInput!
  create: ServiceCreateWithoutAppointmentsInput!
}

input ServiceWhereInput {
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
  type: ServiceType
  type_not: ServiceType
  type_in: [ServiceType!]
  type_not_in: [ServiceType!]
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
  Birthday: DateTime
  Birthday_not: DateTime
  Birthday_in: [DateTime!]
  Birthday_not_in: [DateTime!]
  Birthday_lt: DateTime
  Birthday_lte: DateTime
  Birthday_gt: DateTime
  Birthday_gte: DateTime
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
  Appointments_every: AppointmentWhereInput
  Appointments_some: AppointmentWhereInput
  Appointments_none: AppointmentWhereInput
  AND: [ServiceWhereInput!]
  OR: [ServiceWhereInput!]
  NOT: [ServiceWhereInput!]
}

input ServiceWhereUniqueInput {
  id: ID
  email: String
}

type Subscription {
  appointment(where: AppointmentSubscriptionWhereInput): AppointmentSubscriptionPayload
  appointmentDate(where: AppointmentDateSubscriptionWhereInput): AppointmentDateSubscriptionPayload
  service(where: ServiceSubscriptionWhereInput): ServiceSubscriptionPayload
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
    