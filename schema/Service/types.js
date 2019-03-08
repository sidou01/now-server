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
  }

  type Mutation {
    loginDoctor(input: loginInput): String!
    addDoctor(input: addDoctorInput): Doctor!
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
`
