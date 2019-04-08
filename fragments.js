//change to a function that takes two argumanets: first and skip
export function UserAppointments(first, skip) {
  return `fragment UserAppointments on User {
          Appointments(first: ${first}, skip: ${skip}){
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
	      age
	      email
              phone
              gender
              specialty
            }
          }
        }`
}
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

export function doctorReviews(first, skip) {
  return `
 	fragment doctorReviews on Doctor {
		reviews(first:${first}, skip: ${skip}) {
			id,
			user {
			  fullName
			}
			title
			content
			rating
		}
	}
  `
}
