export const UserAppointments = `fragment UserAppointments on User {
          Appointments {
            id
            title
            startTime
            endTime
            client {
                fullName
                email
                age
                phone
                gender
            }
            service {
              fullName
              phone
              gender
              specialty
            }
          }
        }`

export const AuthenticatedUserInfo = `
    fragment AuthenticatedUserInfo on User {
        id
        fullName
        gender
        age
        Appointments {
            id
            title
            startTime
            endTime
            service {
                id
                fullName
                email
                specialty
                Bio
            }
        }

    } 
`
