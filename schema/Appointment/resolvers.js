import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import dayjs from 'dayjs'
import { getEndTime } from '../../utils'

export default {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Custom description for the date scalar',
    parseValue(value) {
      return dayjs(value) // value from the client
    },
    serialize(value) {
      return dayjs(value).format('MM-DD-YYYY HH:mm:ss') // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return dayjs(ast.value) // ast value is always in string format
      }
      return null
    },
  }),
  Mutation: {
    scheduleLocalAppointment: async (
      _,
      { input: { serviceId, clientName, title, startTime, duration } },
      { prisma },
    ) => {
      const isDuplicate = await prisma.appointment({ startTime })
      if (isDuplicate) throw Error('an appointment already exists at that time')
      endTime = getEndTime(startTime, duration)
      return await prisma.createAppointment({
        service: {
          connect: {
            id: serviceId,
          },
        },
        clientName,
        title,
        startTime,
        endTime,
        duration,
        local: true,
      })
    },
  },
}
