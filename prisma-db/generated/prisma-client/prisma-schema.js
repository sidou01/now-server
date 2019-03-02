module.exports = {
        typeDefs: /* GraphQL */ `type AggregateAppointment {
  count: Int!
}

type AggregateServiceA {
  count: Int!
}

type AggregateServiceB {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Appointment {
  id: ID!
  serviceId: Service!
  userId: User!
  day: String!
  startTime: String!
  endTime: String!
  type: AppointmentType!
}

type AppointmentConnection {
  pageInfo: PageInfo!
  edges: [AppointmentEdge]!
  aggregate: AggregateAppointment!
}

input AppointmentCreateInput {
  serviceId: Service!
  userId: UserCreateOneWithoutAppointmentsInput!
  day: String!
  startTime: String!
  endTime: String!
  type: AppointmentType!
}

input AppointmentCreateManyInput {
  create: [AppointmentCreateInput!]
  connect: [AppointmentWhereUniqueInput!]
}

input AppointmentCreateManyWithoutUserIdInput {
  create: [AppointmentCreateWithoutUserIdInput!]
  connect: [AppointmentWhereUniqueInput!]
}

input AppointmentCreateWithoutUserIdInput {
  serviceId: Service!
  day: String!
  startTime: String!
  endTime: String!
  type: AppointmentType!
}

type AppointmentEdge {
  node: Appointment!
  cursor: String!
}

enum AppointmentOrderByInput {
  id_ASC
  id_DESC
  serviceId_ASC
  serviceId_DESC
  day_ASC
  day_DESC
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AppointmentPreviousValues {
  id: ID!
  serviceId: Service!
  day: String!
  startTime: String!
  endTime: String!
  type: AppointmentType!
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
  serviceId: Service
  serviceId_not: Service
  serviceId_in: [Service!]
  serviceId_not_in: [Service!]
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
  endTime: String
  endTime_not: String
  endTime_in: [String!]
  endTime_not_in: [String!]
  endTime_lt: String
  endTime_lte: String
  endTime_gt: String
  endTime_gte: String
  endTime_contains: String
  endTime_not_contains: String
  endTime_starts_with: String
  endTime_not_starts_with: String
  endTime_ends_with: String
  endTime_not_ends_with: String
  type: AppointmentType
  type_not: AppointmentType
  type_in: [AppointmentType!]
  type_not_in: [AppointmentType!]
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

enum AppointmentType {
  VERY_SHORT
  SHORT
  LONG
}

input AppointmentUpdateDataInput {
  serviceId: Service
  userId: UserUpdateOneRequiredWithoutAppointmentsInput
  day: String
  startTime: String
  endTime: String
  type: AppointmentType
}

input AppointmentUpdateInput {
  serviceId: Service
  userId: UserUpdateOneRequiredWithoutAppointmentsInput
  day: String
  startTime: String
  endTime: String
  type: AppointmentType
}

input AppointmentUpdateManyDataInput {
  serviceId: Service
  day: String
  startTime: String
  endTime: String
  type: AppointmentType
}

input AppointmentUpdateManyInput {
  create: [AppointmentCreateInput!]
  update: [AppointmentUpdateWithWhereUniqueNestedInput!]
  upsert: [AppointmentUpsertWithWhereUniqueNestedInput!]
  delete: [AppointmentWhereUniqueInput!]
  connect: [AppointmentWhereUniqueInput!]
  disconnect: [AppointmentWhereUniqueInput!]
  deleteMany: [AppointmentScalarWhereInput!]
  updateMany: [AppointmentUpdateManyWithWhereNestedInput!]
}

input AppointmentUpdateManyMutationInput {
  serviceId: Service
  day: String
  startTime: String
  endTime: String
  type: AppointmentType
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

input AppointmentUpdateWithoutUserIdDataInput {
  serviceId: Service
  day: String
  startTime: String
  endTime: String
  type: AppointmentType
}

input AppointmentUpdateWithWhereUniqueNestedInput {
  where: AppointmentWhereUniqueInput!
  data: AppointmentUpdateDataInput!
}

input AppointmentUpdateWithWhereUniqueWithoutUserIdInput {
  where: AppointmentWhereUniqueInput!
  data: AppointmentUpdateWithoutUserIdDataInput!
}

input AppointmentUpsertWithWhereUniqueNestedInput {
  where: AppointmentWhereUniqueInput!
  update: AppointmentUpdateDataInput!
  create: AppointmentCreateInput!
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
  serviceId: Service
  serviceId_not: Service
  serviceId_in: [Service!]
  serviceId_not_in: [Service!]
  userId: UserWhereInput
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
  endTime: String
  endTime_not: String
  endTime_in: [String!]
  endTime_not_in: [String!]
  endTime_lt: String
  endTime_lte: String
  endTime_gt: String
  endTime_gte: String
  endTime_contains: String
  endTime_not_contains: String
  endTime_starts_with: String
  endTime_not_starts_with: String
  endTime_ends_with: String
  endTime_not_ends_with: String
  type: AppointmentType
  type_not: AppointmentType
  type_in: [AppointmentType!]
  type_not_in: [AppointmentType!]
  AND: [AppointmentWhereInput!]
  OR: [AppointmentWhereInput!]
  NOT: [AppointmentWhereInput!]
}

input AppointmentWhereUniqueInput {
  id: ID
  startTime: String
  endTime: String
}

type BatchPayload {
  count: Long!
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
  createServiceA(data: ServiceACreateInput!): ServiceA!
  updateServiceA(data: ServiceAUpdateInput!, where: ServiceAWhereUniqueInput!): ServiceA
  updateManyServiceAs(data: ServiceAUpdateManyMutationInput!, where: ServiceAWhereInput): BatchPayload!
  upsertServiceA(where: ServiceAWhereUniqueInput!, create: ServiceACreateInput!, update: ServiceAUpdateInput!): ServiceA!
  deleteServiceA(where: ServiceAWhereUniqueInput!): ServiceA
  deleteManyServiceAs(where: ServiceAWhereInput): BatchPayload!
  createServiceB(data: ServiceBCreateInput!): ServiceB!
  updateServiceB(data: ServiceBUpdateInput!, where: ServiceBWhereUniqueInput!): ServiceB
  updateManyServiceBs(data: ServiceBUpdateManyMutationInput!, where: ServiceBWhereInput): BatchPayload!
  upsertServiceB(where: ServiceBWhereUniqueInput!, create: ServiceBCreateInput!, update: ServiceBUpdateInput!): ServiceB!
  deleteServiceB(where: ServiceBWhereUniqueInput!): ServiceB
  deleteManyServiceBs(where: ServiceBWhereInput): BatchPayload!
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
  serviceA(where: ServiceAWhereUniqueInput!): ServiceA
  serviceAs(where: ServiceAWhereInput, orderBy: ServiceAOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ServiceA]!
  serviceAsConnection(where: ServiceAWhereInput, orderBy: ServiceAOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ServiceAConnection!
  serviceB(where: ServiceBWhereUniqueInput!): ServiceB
  serviceBs(where: ServiceBWhereInput, orderBy: ServiceBOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ServiceB]!
  serviceBsConnection(where: ServiceBWhereInput, orderBy: ServiceBOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ServiceBConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Service {
  ServiceA
  ServiceB
}

type ServiceA {
  id: ID!
  fullName: String!
  Bio: String
  email: String!
  password: String!
  Birthday: String!
  phone: Int
  gender: Gender
  avatar: String
  Appointments(where: AppointmentWhereInput, orderBy: AppointmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Appointment!]
  serviceA: String!
}

type ServiceAConnection {
  pageInfo: PageInfo!
  edges: [ServiceAEdge]!
  aggregate: AggregateServiceA!
}

input ServiceACreateInput {
  fullName: String!
  Bio: String
  email: String!
  password: String!
  Birthday: String!
  phone: Int
  gender: Gender
  avatar: String
  Appointments: AppointmentCreateManyInput
  serviceA: String!
}

type ServiceAEdge {
  node: ServiceA!
  cursor: String!
}

enum ServiceAOrderByInput {
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
  Birthday_ASC
  Birthday_DESC
  phone_ASC
  phone_DESC
  gender_ASC
  gender_DESC
  avatar_ASC
  avatar_DESC
  serviceA_ASC
  serviceA_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ServiceAPreviousValues {
  id: ID!
  fullName: String!
  Bio: String
  email: String!
  password: String!
  Birthday: String!
  phone: Int
  gender: Gender
  avatar: String
  serviceA: String!
}

type ServiceASubscriptionPayload {
  mutation: MutationType!
  node: ServiceA
  updatedFields: [String!]
  previousValues: ServiceAPreviousValues
}

input ServiceASubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ServiceAWhereInput
  AND: [ServiceASubscriptionWhereInput!]
  OR: [ServiceASubscriptionWhereInput!]
  NOT: [ServiceASubscriptionWhereInput!]
}

input ServiceAUpdateInput {
  fullName: String
  Bio: String
  email: String
  password: String
  Birthday: String
  phone: Int
  gender: Gender
  avatar: String
  Appointments: AppointmentUpdateManyInput
  serviceA: String
}

input ServiceAUpdateManyMutationInput {
  fullName: String
  Bio: String
  email: String
  password: String
  Birthday: String
  phone: Int
  gender: Gender
  avatar: String
  serviceA: String
}

input ServiceAWhereInput {
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
  Birthday: String
  Birthday_not: String
  Birthday_in: [String!]
  Birthday_not_in: [String!]
  Birthday_lt: String
  Birthday_lte: String
  Birthday_gt: String
  Birthday_gte: String
  Birthday_contains: String
  Birthday_not_contains: String
  Birthday_starts_with: String
  Birthday_not_starts_with: String
  Birthday_ends_with: String
  Birthday_not_ends_with: String
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
  serviceA: String
  serviceA_not: String
  serviceA_in: [String!]
  serviceA_not_in: [String!]
  serviceA_lt: String
  serviceA_lte: String
  serviceA_gt: String
  serviceA_gte: String
  serviceA_contains: String
  serviceA_not_contains: String
  serviceA_starts_with: String
  serviceA_not_starts_with: String
  serviceA_ends_with: String
  serviceA_not_ends_with: String
  AND: [ServiceAWhereInput!]
  OR: [ServiceAWhereInput!]
  NOT: [ServiceAWhereInput!]
}

input ServiceAWhereUniqueInput {
  id: ID
  email: String
}

type ServiceB {
  id: ID!
  fullName: String!
  Bio: String
  email: String!
  password: String!
  Birthday: String!
  phone: Int
  gender: Gender
  avatar: String
  Appointments(where: AppointmentWhereInput, orderBy: AppointmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Appointment!]
  serviceB: String!
}

type ServiceBConnection {
  pageInfo: PageInfo!
  edges: [ServiceBEdge]!
  aggregate: AggregateServiceB!
}

input ServiceBCreateInput {
  fullName: String!
  Bio: String
  email: String!
  password: String!
  Birthday: String!
  phone: Int
  gender: Gender
  avatar: String
  Appointments: AppointmentCreateManyInput
  serviceB: String!
}

type ServiceBEdge {
  node: ServiceB!
  cursor: String!
}

enum ServiceBOrderByInput {
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
  Birthday_ASC
  Birthday_DESC
  phone_ASC
  phone_DESC
  gender_ASC
  gender_DESC
  avatar_ASC
  avatar_DESC
  serviceB_ASC
  serviceB_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ServiceBPreviousValues {
  id: ID!
  fullName: String!
  Bio: String
  email: String!
  password: String!
  Birthday: String!
  phone: Int
  gender: Gender
  avatar: String
  serviceB: String!
}

type ServiceBSubscriptionPayload {
  mutation: MutationType!
  node: ServiceB
  updatedFields: [String!]
  previousValues: ServiceBPreviousValues
}

input ServiceBSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ServiceBWhereInput
  AND: [ServiceBSubscriptionWhereInput!]
  OR: [ServiceBSubscriptionWhereInput!]
  NOT: [ServiceBSubscriptionWhereInput!]
}

input ServiceBUpdateInput {
  fullName: String
  Bio: String
  email: String
  password: String
  Birthday: String
  phone: Int
  gender: Gender
  avatar: String
  Appointments: AppointmentUpdateManyInput
  serviceB: String
}

input ServiceBUpdateManyMutationInput {
  fullName: String
  Bio: String
  email: String
  password: String
  Birthday: String
  phone: Int
  gender: Gender
  avatar: String
  serviceB: String
}

input ServiceBWhereInput {
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
  Birthday: String
  Birthday_not: String
  Birthday_in: [String!]
  Birthday_not_in: [String!]
  Birthday_lt: String
  Birthday_lte: String
  Birthday_gt: String
  Birthday_gte: String
  Birthday_contains: String
  Birthday_not_contains: String
  Birthday_starts_with: String
  Birthday_not_starts_with: String
  Birthday_ends_with: String
  Birthday_not_ends_with: String
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
  serviceB: String
  serviceB_not: String
  serviceB_in: [String!]
  serviceB_not_in: [String!]
  serviceB_lt: String
  serviceB_lte: String
  serviceB_gt: String
  serviceB_gte: String
  serviceB_contains: String
  serviceB_not_contains: String
  serviceB_starts_with: String
  serviceB_not_starts_with: String
  serviceB_ends_with: String
  serviceB_not_ends_with: String
  AND: [ServiceBWhereInput!]
  OR: [ServiceBWhereInput!]
  NOT: [ServiceBWhereInput!]
}

input ServiceBWhereUniqueInput {
  id: ID
  email: String
}

type Subscription {
  appointment(where: AppointmentSubscriptionWhereInput): AppointmentSubscriptionPayload
  serviceA(where: ServiceASubscriptionWhereInput): ServiceASubscriptionPayload
  serviceB(where: ServiceBSubscriptionWhereInput): ServiceBSubscriptionPayload
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
    