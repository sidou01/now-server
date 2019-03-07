export const UserAppointments = `fragment UserAppointments on User {
          Appointments {
            id
            title
            startTime
            endTime
            service {
              fullName
              phone
              gender
              specialty
            }
          }
        }`
