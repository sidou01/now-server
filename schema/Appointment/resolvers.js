import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import dayjs from 'dayjs'

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
        }
    }),
    Mutation: {
        scheduleAppointment: async (
            _,
            { input: { serviceId, clientId, title, startTime, duration } },
            { prisma }
        ) => {
            let endTime
            switch (duration) {
                case 'VERY_SHORT':
                    endTime = startTime.add(15, 'minute')
                    break
                case 'SHORT':
                    endTime = startTime.add(30, 'minute')
                    break
                case 'LONG':
                    endTime = startTime.add(45, 'minute')
                    break
                case 'VERY_LONG':
                    endTime = startTime.add(60, 'minute')
                    break
            }
            endTime = endTime.format('YYYY-MM-DD HH:mm:ss')
            //can't return client and service data from this resolver
            return await prisma.createAppointment({
                service: {
                    connect: {
                        id: serviceId
                    }
                },
                client: {
                    connect: {
                        id: clientId
                    }
                },
                title,
                startTime,
                endTime,
                duration
            })
        }
    }

}