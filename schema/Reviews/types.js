export default `
  type Review {
    id: ID!
    user: User!
    service: Service!
    title: String!
    content: String!
    rating: Int!
  }
`
