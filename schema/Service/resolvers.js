import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default {
    Query: {
        allDoctors: async (_, __, { prisma }) => await prisma.doctors(),
    },
    Mutation: {
        loginDoctor: async (
            _,
            { input: { email, password } },
            { prisma, jwt_secret }
        ) => {
            const doctor = await prisma.doctor({ email })
            if (!doctor) throw new Error("doctor deosn't exist")
            const auth = await bcrypt.compare(password, doctor.password)
            if (!auth) throw new Error('your email or password is wrong')

            const { id, fullName, age, phone, avatar } = doctor
            const token = jwt.sign(
                {
                    id,
                    fullName,
                    email: doctor.email,
                    age,
                    avatar,
                    phone
                },
                jwt_secret
            )
            return token
        },
        addDoctor: async (
            _,
            {
                input: {
                    fullName,
                    Bio,
                    email,
                    password,
                    age,
                    phone,
                    gender,
                    avatar,
                    specialty
                }
            },
            { prisma }
        ) => {
            const isDoctor = await prisma.doctor({ email })
            if (isDoctor) throw new Error('Doctor already exists with that email.')
            const hashedPassword = await bcrypt.hash(password, 10)
            return await prisma.createDoctor({
                fullName,
                Bio,
                email,
                password: hashedPassword,
                age,
                phone,
                gender,
                avatar,
                specialty
            })
        }

    }
}