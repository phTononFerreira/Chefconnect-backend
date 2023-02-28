import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";

interface AuthRequest {
    email: string,
    password: string
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {

        //VERIFICAR SE O EMAIL EXISTE
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        if (!user) {
            throw new Error("Email/Password incorrect")
        }

        //VERIFICAR SE SENHA ESTA CORRETA 
        const passwordMatch = await compare(password, user.password)
        if (!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }

        //GERAR TOKEN JWT
        const token = sign({
            name: user.name,    // PAYLOAD
            email: user.email
        },
            process.env.SECRET_JWT,
            {
                subject: user.id,
                expiresIn: '30d'    //TEMPO PARA EXPIRAR O TOKEN
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService };

