export const AllServices = `{
        id
        fullName
	Bio
	email
	phone
	address
	office_hours
	education
        age
        gender
	avatar
	serviceType
	doctorField
	lawyerField
}`
export function UserAppointments(first, skip) {
  return `fragment UserAppointments on User {
          appointments(first: ${first}, skip: ${skip}){
            id
            title
            start
            end
            duration
	    createdTime
	    local
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
	      serviceType
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
	phone
	avatar
	confirmation
    }
`
export const AuthenticatedServiceInfo = `
    fragment AuthenticatedServiceInfo on Doctor {
        id
        fullName
	Bio
	email
	phone
	address
	office_hours
	education
        age
        gender
	avatar
	specialty
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

export const serviceAppointments = `
    fragment doctorAppointments on Service {
        appointments {
            id
            title
            start
            end
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
      start
      end
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

export function serviceReviews(first, skip) {
  return `
 	fragment serviceReviews on Service {
		reviews(first:${first}, skip: ${skip}) {
			id,
			user {
			  id
			  fullName
			  email
			}
			title
			content
			rating
		}
	}
  `
}

export function clientSentMessages(first, skip) {
  return `
		fragment clientSentMessages on User {
			sentMessages(first: ${first}, skip: ${skip}) {
				id
				reciever {
					id,
					fullName
					email
				}
				subject
				body
			}
		}
	`
}

export function serviceSentMessages(first, skip) {
  return `
		fragment clientSentMessages on Service {
			sentMessages(first: ${first}, skip: ${skip}) {
				id
				reciever {
					id,
					fullName
					email
				}
				subject
				body
			}
		}
	`
}
export function clientRecievedMessages(first, skip) {
  return `
		fragment clientRecievedMessages on User {
			recievedMessages(first: ${first}, skip: ${skip}) {
				id
				sender {
					id,
					fullName
					email
				}
				subject
				body
			}
		}
	`
}

export function serviceRecievedMessages(first, skip) {
  return `
		fragment clientRecievedMessages on Service {
			recievedMessages(first: ${first}, skip: ${skip}) {
				id
				sender {
					id,
					fullName
					email
				}
				subject
				body
			}
		}
	`
}
