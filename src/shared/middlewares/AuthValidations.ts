import { config } from '@shared/config'
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

type AuthenticatedUser = {
    username: string
}

const DecodeToken = (token: string): AuthenticatedUser | false => {
    try {
        const data: any = jwt.verify(token, config.get('jwt'))
        return data
    } catch {
        return false
    }
}

export const signinToken = username => {
    const token = jwt.sign({ username }, config.get('jwt'), {
        expiresIn: '6h',
    })

    return token
}

const QueryAUth = () => {
    // eslint-disable-next-line consistent-return
    return async (req: Request, res: Response, next: NextFunction) => {
        if (!Object.prototype.hasOwnProperty.call(req.params, 'token')) {
            return res.status(400).json({
                message: 'Token inválido',
            })
        }

        const { token } = req.params as any

        const result = DecodeToken(token)

        if (!result) {
            return res.status(400).json({
                message: 'Token inválido',
            })
        }

        // req.userAuthenticated = result;

        next()
    }
}

export default QueryAUth
