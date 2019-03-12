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
export const messageToClient = `
    fragment MessageFromService on ServiceMessage {
      id
      subject
      body
      sender {
        id
        fullName
        email
      }
      reciever {
        id
        fullName
        email
      }
    }
`

export const messageToService = `
    fragment MessageFromService on ClientMessage {
      id
      subject
      body
      sender {
        id
        fullName
        email
      }
      reciever {
        id
        fullName
        email
      }
    }
`
