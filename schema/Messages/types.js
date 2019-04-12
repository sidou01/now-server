export default `
    type ClientMessage {
        id: ID!
        sender: User!
        reciever: Service!
        subject: String!
        body: String!
    }

    type ServiceMessage {
        id: ID!
        sender: Service!
        reciever: User!
        subject: String!
        body: String!
    }

    type Query {
      fetchServiceSentMessages(first: Int, skip: Int): [ServiceMessage!]
      fetchClientSentMessages(first: Int, skip: Int): [ClientMessage!]

      fetchClientRecievedMessages(first: Int, skip: Int): [ServiceMessage!]
      fetchServiceRecievedMessages(first: Int, skip: Int): [ClientMessage!]
    }
`
