export default {
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