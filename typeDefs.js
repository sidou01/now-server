import { gql } from 'apollo-server'

/*
1- Sub to a post and get comments back
2- Pagination for users and posts and comments
3- Add facebook/google auth (not mandatory)
*/

const typeDefs = gql`
  type Query {
    hello: String!
  }
`
export default typeDefs
