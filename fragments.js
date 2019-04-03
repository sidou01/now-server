import { APPOINTMENT_TO_SERVICE } from "./schema/topics"

export const UserAppointments = `fragment UserAppointments on User {
          Appointments {
            id
            title
            startTime
            endTime
            duration
            client {
                fullName
                email
                age
                phone
                gender
            }
            service {
              id
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

export const doctorAppointments = `
    fragment doctorAppointments on Doctor {
        appointments {
            id
            title
            startTime
            endTime
            clientName
            local
            client {
              id
              fullName
              email
            }
        }
    }
`
export const appointmentToService = `
    fragment appointmentToService on Appointment {
      id
      title
      startTime
      endTime
      duration
      service {
        id
      }
    }
`
