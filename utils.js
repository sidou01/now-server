import jwt from 'jsonwebtoken'
import avatarMe from 'avatar-me'

export function getEndTime(startTime, duration) {
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
  return endTime.format('YYYY-MM-DD HH:mm:ss')
}

export function getUser(token, secret) {
  if (token === 'null') return null
  return jwt.verify(token, secret)
}

export function fetchAvatar(email, name) {
  return new Promise((resolve, reject) => {
    avatarMe.fetchAvatar(email, name, (err, avatar) => {
      if (err) reject(err)
      if (avatar) resolve(avatar)
    })
  })
}
