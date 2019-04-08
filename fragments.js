//change to a function that takes two arguments: first and skip
export const UserAppointments = `fragment UserAppointments on User {
          Appointments(first: 1){
            id
            title
            startTime
            endTime
            duration
	    createdTime
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
	email
        gender
        age
        Appointments {
            id
            title
            startTime
            endTime
	    createdTime
            service {
                id
                fullName
                email
                specialty
                Bio
            }
        }
	reviews {
	  id
	  title
	   content
	   rating
	   service {
	     id
             fullName
             email
	     specialty
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
	    createdTime
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
      createdTime
      service {
        id
      }
    }
`
export const reviewToService = `
    fragment reviewToService on Review  {
      id
      title
      content
      user {
      	id
	fullName
	email
      }
      service {
      	id
	fullName
	email
      }
    }
`
