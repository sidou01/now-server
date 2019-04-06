export default `
  type Review {
    id: ID!
    user: User!
    service: Doctor!
    title: String!
    content: String!
    rating: Int!
  }
`
