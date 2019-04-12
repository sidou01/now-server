import {
  clientSentMessages,
  serviceSentMessages,
  clientRecievedMessages,
  serviceRecievedMessages
} from "../../fragments"
import { AuthentificationError } from "apollo-server"

export default {
  Query: {
    fetchServiceSentMessages: async (_, { first, skip }, { prisma, user }) => {
      if (user.client)
        throw new AuthentificationError("401 unauthorized service only query")
      if (skip === undefined) skip = null
      if (first === undefined) first = null
      const output = await prisma
        .service({ id: user.id })
        .$fragment(serviceSentMessages(first, skip))

      if (!output) throw new Error("Error 404: Messages not found")
      return output.sentMessages
    },
    fetchClientSentMessages: async (_, { first, skip }, { prisma, user }) => {
      if (!user.client)
        throw new AuthentificationError("401 unauthorized client only query")
      if (skip === undefined) skip = null
      if (first === undefined) first = null
      const output = await prisma
        .user({ id: user.id })
        .$fragment(clientSentMessages(first, skip))

      if (!output) throw new Error("Error 404: Messages not found")
      return output.sentMessages
    },
    fetchServiceRecievedMessages: async (
      _,
      { first, skip },
      { prisma, user }
    ) => {
      if (!user) throw new Error("401 unauthorized")
      if (user.client) throw new Error("401 unauthorized service only query")
      if (skip === undefined) skip = null
      if (first === undefined) first = null

      const output = await prisma
        .service({ id: user.id })
        .$fragment(serviceRecievedMessages(first, skip))

      if (!output) throw new Error("user doesn't exist with that ID")
      return output.recievedMessages
    },
    fetchClientRecievedMessages: async (
      _,
      { first, skip },
      { prisma, user }
    ) => {
      if (!user) throw new Error("401 unauthorized")
      if (!user.client) throw new Error("401 unauthorized client only query")
      if (skip === undefined) skip = null
      if (first === undefined) first = null

      const output = await prisma
        .user({ id: user.id })
        .$fragment(clientRecievedMessages(first, skip))

      if (!output) throw new Error("user doesn't exist with that ID")
      return output.recievedMessages
    }
  }
}
