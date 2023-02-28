import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string
}

export function tokenCheck(req: Request, res: Response, next: NextFunction) {

    const authToken = req.headers.authorization
    if (!authToken) {
        return res.status(401).end()
    }
    const [, token] = authToken.split(" ")

    try { // VALIDAÇÃO DO TOKEN JWT
        const { sub } = verify(
            token,
            process.env.SECRET_JWT
        ) as Payload
        
        // ATRIBUTO NOVO CRIADO SOB O 'Request' DO EXPRESS (USANDO O @TYPES)
        req.user_id = sub

        console.log(` - USUARIO AUTORIZADO 💹 (${sub})`)
        return next()    

    } catch {
        console.log(` - USUARIO NEGADO ❌`)
        return res.status(401).end()
    }

    

    
}