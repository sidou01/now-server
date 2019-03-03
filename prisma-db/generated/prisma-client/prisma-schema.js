module.exports = {
        typeDefs: /* GraphQL */ `type AggregateAppointmentA {
  count: Int!
}

type AggregateAppointmentB {
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

type AppointmentA {
  id: ID!
  serviceId: ServiceA!
  userId: User!
  day: String!
  startTime: String!
  endTime: String!
  type: AppointmentType!
}

type AppointmentAConnection {
  pageInfo: PageInfo!
  edges: [AppointmentAEdge]!
  aggregate: AggregateAppointmentA!
}

input AppointmentACreateInput {
  serviceId: ServiceACreateOneWithoutAppointmentsInput!
  userId: UserCreateOneWithoutAppointmentsAInput!
  day: String!
  startTime: String!
  endTime: String!
  type: AppointmentType!
}

input AppointmentACreateManyWithoutServiceIdInput {
  create: [AppointmentACreateWithoutServiceIdInput!]
  connect: [AppointmentAWhereUniqueInput!]
}

input AppointmentACreateManyWithoutUserIdInput {
  create: [AppointmentACreateWithoutUserIdInput!]
  connect: [AppointmentAWhereUniqueInput!]
}

input AppointmentACreateWithoutServiceIdInput {
  userId: UserCreateOneWithoutAppointmentsAInput!
  day: String!
  startTime: String!
  endTime: String!
  type: AppointmentType!
}

input AppointmentACreateWithoutUserIdInput {
  serviceId: ServiceACreateOneWithoutAppointmentsInput!
  day: String!
  startTime: String!
  endTime: String!
  type: AppointmentType!
}

type AppointmentAEdge {
  node: AppointmentA!
  cursor: String!
}

enum AppointmentAOrderByInput {
  id_ASC
  id_DESC
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

type AppointmentAPreviousValues {
  id: ID!
  day: String!
  startTime: String!
  endTime: String!
  type: AppointmentType!
}

input AppointmentAScalarWhereInput {
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
  AND: [AppointmentAScalarWhereInput!]
  OR: [AppointmentAScalarWhereInput!]
  NOT: [AppointmentAScalarWhereInput!]
}

type AppointmentASubscriptionPayload {
  mutation: MutationType!
  node: AppointmentA
  updatedFields: [String!]
  previousValues: AppointmentAPreviousValues
}

input AppointmentASubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AppointmentAWhereInput
  AND: [AppointmentASubscriptionWhereInput!]
  OR: [AppointmentASubscriptionWhereInput!]
  NOT: [AppointmentASubscriptionWhereInput!]
}

input AppointmentAUpdateInput {
  serviceId: ServiceAUpdateOneRequiredWithoutAppointmentsInput
  userId: UserUpdateOneRequiredWithoutAppointmentsAInput
  day: String
  startTime: String
  endTime: String
  type: AppointmentType
}

input AppointmentAUpdateManyDataInput {
  day: String
  startTime: String
  endTime: String
  type: AppointmentType
}

input AppointmentAUpdateManyMutationInput {
  day: String
  startTime: String
  endTime: String
  type: AppointmentType
}

input AppointmentAUpdateManyWithoutServiceIdInput {
  create: [AppointmentACreateWithoutServiceIdInput!]
  delete: [AppointmentAWhereUniqueInput!]
  connect: [AppointmentAWhereUniqueInput!]
  disconnect: [AppointmentAWhereUniqueInput!]
  update: [AppointmentAUpdateWithWhereUniqueWithoutServiceIdInput!]
  upsert: [AppointmentAUpsertWithWhereUniqueWithoutServiceIdInput!]
  deleteMany: [AppointmentAScalarWhereInput!]
  updateMany: [AppointmentAUpdateManyWithWhereNestedInput!]
}

input AppointmentAUpdateManyWithoutUserIdInput {
  create: [AppointmentACreateWithoutUserIdInput!]
  delete: [AppointmentAWhereUniqueInput!]
  connect: [AppointmentAWhereUniqueInput!]
  disconnect: [AppointmentAWhereUniqueInput!]
  update: [AppointmentAUpdateWithWhereUniqueWithoutUserIdInput!]
  upsert: [AppointmentAUpsertWithWhereUniqueWithoutUserIdInput!]
  deleteMany: [AppointmentAScalarWhereInput!]
  updateMany: [AppointmentAUpdateManyWithWhereNestedInput!]
}

input AppointmentAUpdateManyWithWhereNestedInput {
  where: AppointmentAScalarWhereInput!
  data: AppointmentAUpdateManyDataInput!
}

input AppointmentAUpdateWithoutServiceIdDataInput {
  userId: UserUpdateOneRequiredWithoutAppointmentsAInput
  day: String
  startTime: String
  endTime: String
  type: AppointmentType
}

input AppointmentAUpdateWithoutUserIdDataInput {
  serviceId: ServiceAUpdateOneRequiredWithoutAppointmentsInput
  day: String
  startTime: String
  endTime: String
  type: AppointmentType
}

input AppointmentAUpdateWithWhereUniqueWithoutServiceIdInput {
  where: AppointmentAWhereUniqueInput!
  data: AppointmentAUpdateWithoutServiceIdDataInput!
}

input AppointmentAUpdateWithWhereUniqueWithoutUserIdInput {
  where: AppointmentAWhereUniqueInput!
  data: AppointmentAUpdateWithoutUserIdDataInput!
}

input AppointmentAUpsertWithWhereUniqueWithoutServiceIdInput {
  where: AppointmentAWhereUniqueInput!
  update: AppointmentAUpdateWithoutServiceIdDataInput!
  create: AppointmentACreateWithoutServiceIdInput!
}

input AppointmentAUpsertWithWhereUniqueWithoutUserIdInput {
  where: AppointmentAWhereUniqueInput!
  update: AppointmentAUpdateWithoutUserIdDataInput!
  create: AppointmentACreateWithoutUserIdInput!
}

input AppointmentAWhereInput {
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
  serviceId: ServiceAWhereInput
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
  AND: [AppointmentAWhereInput!]
  OR: [AppointmentAWhereInput!]
  NOT: [AppointmentAWhereInput!]
}

input AppointmentAWhereUniqueInput {
  id: ID
  startTime: String
  endTime: String
}

type AppointmentB {
  id: ID!
  serviceId: ServiceB!
  userId: User!
  day: String!
  startTime: String!
  endTime: String!
  type: AppointmentType!
}

type AppointmentBConnection {
  pageInfo: PageInfo!
  edges: [AppointmentBEdge]!
  aggregate: AggregateAppointmentB!
}

input AppointmentBCreateInput {
  serviceId: ServiceBCreateOneWithoutAppointmentsInput!
  userId: UserCreateOneWithoutAppointmentsBInput!
  day: String!
  startTime: String!
  endTime: String!
  type: AppointmentType!
}

input AppointmentBCreateManyWithoutServiceIdInput {
  create: [AppointmentBCreateWithoutServiceIdInput!]
  connect: [AppointmentBWhereUniqueInput!]
}

input AppointmentBCreateManyWithoutUserIdInput {
  create: [AppointmentBCreateWithoutUserIdInput!]
  connect: [AppointmentBWhereUniqueInput!]
}

input AppointmentBCreateWithoutServiceIdInput {
  userId: UserCreateOneWithoutAppointmentsBInput!
  day: String!
  startTime: String!
  endTime: String!
  type: AppointmentType!
}

input AppointmentBCreateWithoutUserIdInput {
  serviceId: ServiceBCreateOneWithoutAppointmentsInput!
  day: String!
  startTime: String!
  endTime: String!
  type: AppointmentType!
}

type AppointmentBEdge {
  node: AppointmentB!
  cursor: String!
}

enum AppointmentBOrderByInput {
  id_ASC
  id_DESC
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

type AppointmentBPreviousValues {
  id: ID!
  day: String!
  startTime: String!
  endTime: String!
  type: AppointmentType!
}

input AppointmentBScalarWhereInput {
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
  AND: [AppointmentBScalarWhereInput!]
  OR: [AppointmentBScalarWhereInput!]
  NOT: [AppointmentBScalarWhereInput!]
}

type AppointmentBSubscriptionPayload {
  mutation: MutationType!
  node: AppointmentB
  updatedFields: [String!]
  previousValues: AppointmentBPreviousValues
}

input AppointmentBSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AppointmentBWhereInput
  AND: [AppointmentBSubscriptionWhereInput!]
  OR: [AppointmentBSubscriptionWhereInput!]
  NOT: [AppointmentBSubscriptionWhereInput!]
}

input AppointmentBUpdateInput {
  serviceId: ServiceBUpdateOneRequiredWithoutAppointmentsInput
  userId: UserUpdateOneRequiredWithoutAppointmentsBInput
  day: String
  startTime: String
  endTime: String
  type: AppointmentType
}

input AppointmentBUpdateManyDataInput {
  day: String
  startTime: String
  endTime: String
  type: AppointmentType
}

input AppointmentBUpdateManyMutationInput {
  day: String
  startTime: String
  endTime: String
  type: AppointmentType
}

input AppointmentBUpdateManyWithoutServiceIdInput {
  create: [AppointmentBCreateWithoutServiceIdInput!]
  delete: [AppointmentBWhereUniqueInput!]
  connect: [AppointmentBWhereUniqueInput!]
  disconnect: [AppointmentBWhereUniqueInput!]
  update: [AppointmentBUpdateWithWhereUniqueWithoutServiceIdInput!]
  upsert: [AppointmentBUpsertWithWhereUniqueWithoutServiceIdInput!]
  deleteMany: [AppointmentBScalarWhereInput!]
  updateMany: [AppointmentBUpdateManyWithWhereNestedInput!]
}

input AppointmentBUpdateManyWithoutUserIdInput {
  create: [AppointmentBCreateWithoutUserIdInput!]
  delete: [AppointmentBWhereUniqueInput!]
  connect: [AppointmentBWhereUniqueInput!]
  disconnect: [AppointmentBWhereUniqueInput!]
  update: [AppointmentBUpdateWithWhereUniqueWithoutUserIdInput!]
  upsert: [AppointmentBUpsertWithWhereUniqueWithoutUserIdInput!]
  deleteMany: [AppointmentBScalarWhereInput!]
  updateMany: [AppointmentBUpdateManyWithWhereNestedInput!]
}

input AppointmentBUpdateManyWithWhereNestedInput {
  where: AppointmentBScalarWhereInput!
  data: AppointmentBUpdateManyDataInput!
}

input AppointmentBUpdateWithoutServiceIdDataInput {
  userId: UserUpdateOneRequiredWithoutAppointmentsBInput
  day: String
  startTime: String
  endTime: String
  type: AppointmentType
}

input AppointmentBUpdateWithoutUserIdDataInput {
  serviceId: ServiceBUpdateOneRequiredWithoutAppointmentsInput
  day: String
  startTime: String
  endTime: String
  type: AppointmentType
}

input AppointmentBUpdateWithWhereUniqueWithoutServiceIdInput {
  where: AppointmentBWhereUniqueInput!
  data: AppointmentBUpdateWithoutServiceIdDataInput!
}

input AppointmentBUpdateWithWhereUniqueWithoutUserIdInput {
  where: AppointmentBWhereUniqueInput!
  data: AppointmentBUpdateWithoutUserIdDataInput!
}

input AppointmentBUpsertWithWhereUniqueWithoutServiceIdInput {
  where: AppointmentBWhereUniqueInput!
  update: AppointmentBUpdateWithoutServiceIdDataInput!
  create: AppointmentBCreateWithoutServiceIdInput!
}

input AppointmentBUpsertWithWhereUniqueWithoutUserIdInput {
  where: AppointmentBWhereUniqueInput!
  update: AppointmentBUpdateWithoutUserIdDataInput!
  create: AppointmentBCreateWithoutUserIdInput!
}

input AppointmentBWhereInput {
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
  serviceId: ServiceBWhereInput
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
  AND: [AppointmentBWhereInput!]
  OR: [AppointmentBWhereInput!]
  NOT: [AppointmentBWhereInput!]
}

input AppointmentBWhereUniqueInput {
  id: ID
  startTime: String
  endTime: String
}

enum AppointmentType {
  VERY_SHORT
  SHORT
  LONG
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
  createAppointmentA(data: AppointmentACreateInput!): AppointmentA!
  updateAppointmentA(data: AppointmentAUpdateInput!, where: AppointmentAWhereUniqueInput!): AppointmentA
  updateManyAppointmentAs(data: AppointmentAUpdateManyMutationInput!, where: AppointmentAWhereInput): BatchPayload!
  upsertAppointmentA(where: AppointmentAWhereUniqueInput!, create: AppointmentACreateInput!, update: AppointmentAUpdateInput!): AppointmentA!
  deleteAppointmentA(where: AppointmentAWhereUniqueInput!): AppointmentA
  deleteManyAppointmentAs(where: AppointmentAWhereInput): BatchPayload!
  createAppointmentB(data: AppointmentBCreateInput!): AppointmentB!
  updateAppointmentB(data: AppointmentBUpdateInput!, where: AppointmentBWhereUniqueInput!): AppointmentB
  updateManyAppointmentBs(data: AppointmentBUpdateManyMutationInput!, where: AppointmentBWhereInput): BatchPayload!
  upsertAppointmentB(where: AppointmentBWhereUniqueInput!, create: AppointmentBCreateInput!, update: AppointmentBUpdateInput!): AppointmentB!
  deleteAppointmentB(where: AppointmentBWhereUniqueInput!): AppointmentB
  deleteManyAppointmentBs(where: AppointmentBWhereInput): BatchPayload!
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
  appointmentA(where: AppointmentAWhereUniqueInput!): AppointmentA
  appointmentAs(where: AppointmentAWhereInput, orderBy: AppointmentAOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AppointmentA]!
  appointmentAsConnection(where: AppointmentAWhereInput, orderBy: AppointmentAOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AppointmentAConnection!
  appointmentB(where: AppointmentBWhereUniqueInput!): AppointmentB
  appointmentBs(where: AppointmentBWhereInput, orderBy: AppointmentBOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AppointmentB]!
  appointmentBsConnection(where: AppointmentBWhereInput, orderBy: AppointmentBOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AppointmentBConnection!
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
  Appointments(where: AppointmentAWhereInput, orderBy: AppointmentAOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AppointmentA!]
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
  Appointments: AppointmentACreateManyWithoutServiceIdInput
}

input ServiceACreateOneWithoutAppointmentsInput {
  create: ServiceACreateWithoutAppointmentsInput
  connect: ServiceAWhereUniqueInput
}

input ServiceACreateWithoutAppointmentsInput {
  fullName: String!
  Bio: String
  email: String!
  password: String!
  Birthday: String!
  phone: Int
  gender: Gender
  avatar: String
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
  Appointments: AppointmentAUpdateManyWithoutServiceIdInput
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
}

input ServiceAUpdateOneRequiredWithoutAppointmentsInput {
  create: ServiceACreateWithoutAppointmentsInput
  update: ServiceAUpdateWithoutAppointmentsDataInput
  upsert: ServiceAUpsertWithoutAppointmentsInput
  connect: ServiceAWhereUniqueInput
}

input ServiceAUpdateWithoutAppointmentsDataInput {
  fullName: String
  Bio: String
  email: String
  password: String
  Birthday: String
  phone: Int
  gender: Gender
  avatar: String
}

input ServiceAUpsertWithoutAppointmentsInput {
  update: ServiceAUpdateWithoutAppointmentsDataInput!
  create: ServiceACreateWithoutAppointmentsInput!
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
  Appointments_every: AppointmentAWhereInput
  Appointments_some: AppointmentAWhereInput
  Appointments_none: AppointmentAWhereInput
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
  Appointments(where: AppointmentBWhereInput, orderBy: AppointmentBOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AppointmentB!]
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
  Appointments: AppointmentBCreateManyWithoutServiceIdInput
}

input ServiceBCreateOneWithoutAppointmentsInput {
  create: ServiceBCreateWithoutAppointmentsInput
  connect: ServiceBWhereUniqueInput
}

input ServiceBCreateWithoutAppointmentsInput {
  fullName: String!
  Bio: String
  email: String!
  password: String!
  Birthday: String!
  phone: Int
  gender: Gender
  avatar: String
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
  Appointments: AppointmentBUpdateManyWithoutServiceIdInput
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
}

input ServiceBUpdateOneRequiredWithoutAppointmentsInput {
  create: ServiceBCreateWithoutAppointmentsInput
  update: ServiceBUpdateWithoutAppointmentsDataInput
  upsert: ServiceBUpsertWithoutAppointmentsInput
  connect: ServiceBWhereUniqueInput
}

input ServiceBUpdateWithoutAppointmentsDataInput {
  fullName: String
  Bio: String
  email: String
  password: String
  Birthday: String
  phone: Int
  gender: Gender
  avatar: String
}

input ServiceBUpsertWithoutAppointmentsInput {
  update: ServiceBUpdateWithoutAppointmentsDataInput!
  create: ServiceBCreateWithoutAppointmentsInput!
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
  Appointments_every: AppointmentBWhereInput
  Appointments_some: AppointmentBWhereInput
  Appointments_none: AppointmentBWhereInput
  AND: [ServiceBWhereInput!]
  OR: [ServiceBWhereInput!]
  NOT: [ServiceBWhereInput!]
}

input ServiceBWhereUniqueInput {
  id: ID
  email: String
}

type Subscription {
  appointmentA(where: AppointmentASubscriptionWhereInput): AppointmentASubscriptionPayload
  appointmentB(where: AppointmentBSubscriptionWhereInput): AppointmentBSubscriptionPayload
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
  AppointmentsA(where: AppointmentAWhereInput, orderBy: AppointmentAOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AppointmentA!]
  AppointmentsB(where: AppointmentBWhereInput, orderBy: AppointmentBOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AppointmentB!]
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
  AppointmentsA: AppointmentACreateManyWithoutUserIdInput
  AppointmentsB: AppointmentBCreateManyWithoutUserIdInput
}

input UserCreateOneWithoutAppointmentsAInput {
  create: UserCreateWithoutAppointmentsAInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutAppointmentsBInput {
  create: UserCreateWithoutAppointmentsBInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAppointmentsAInput {
  fullName: String!
  email: String!
  password: String!
  age: Int!
  phone: Int
  gender: Gender
  avatar: String
  AppointmentsB: AppointmentBCreateManyWithoutUserIdInput
}

input UserCreateWithoutAppointmentsBInput {
  fullName: String!
  email: String!
  password: String!
  age: Int!
  phone: Int
  gender: Gender
  avatar: String
  AppointmentsA: AppointmentACreateManyWithoutUserIdInput
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
  AppointmentsA: AppointmentAUpdateManyWithoutUserIdInput
  AppointmentsB: AppointmentBUpdateManyWithoutUserIdInput
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

input UserUpdateOneRequiredWithoutAppointmentsAInput {
  create: UserCreateWithoutAppointmentsAInput
  update: UserUpdateWithoutAppointmentsADataInput
  upsert: UserUpsertWithoutAppointmentsAInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutAppointmentsBInput {
  create: UserCreateWithoutAppointmentsBInput
  update: UserUpdateWithoutAppointmentsBDataInput
  upsert: UserUpsertWithoutAppointmentsBInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutAppointmentsADataInput {
  fullName: String
  email: String
  password: String
  age: Int
  phone: Int
  gender: Gender
  avatar: String
  AppointmentsB: AppointmentBUpdateManyWithoutUserIdInput
}

input UserUpdateWithoutAppointmentsBDataInput {
  fullName: String
  email: String
  password: String
  age: Int
  phone: Int
  gender: Gender
  avatar: String
  AppointmentsA: AppointmentAUpdateManyWithoutUserIdInput
}

input UserUpsertWithoutAppointmentsAInput {
  update: UserUpdateWithoutAppointmentsADataInput!
  create: UserCreateWithoutAppointmentsAInput!
}

input UserUpsertWithoutAppointmentsBInput {
  update: UserUpdateWithoutAppointmentsBDataInput!
  create: UserCreateWithoutAppointmentsBInput!
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
  AppointmentsA_every: AppointmentAWhereInput
  AppointmentsA_some: AppointmentAWhereInput
  AppointmentsA_none: AppointmentAWhereInput
  AppointmentsB_every: AppointmentBWhereInput
  AppointmentsB_some: AppointmentBWhereInput
  AppointmentsB_none: AppointmentBWhereInput
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
    