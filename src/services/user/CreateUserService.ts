import { hash } from "bcryptjs"
import prismaClient from "../../prisma"

interface UserRequest{
    name: string
    email: string
    password: string
}

class CreateUserService{
    async execute({name, email, password}: UserRequest) {

        if(!email){
            throw new Error("Email is missing")
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists){
            throw new Error("Email already exists")
        }

        const passwordHash = await hash(password, 7)
        
        //CADASTRA USUARIO NO BD
        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            }, 
            select: {
                id: true,
                name: true,
                email: true,
            }
        })

        return(user)
    }
}

export { CreateUserService }

