import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListOrdersUserCase } from './ListOrdersUserCase'

class ListOrdersController {
    async handle(request: Request, response: Response) {
        const {
            userParticipantId,
            contactStatus,
            paymentMethod,
            paymentStatus,
        } = request.query

        const userId = String(userParticipantId)

        const listOrdersUserCase = container.resolve(ListOrdersUserCase)

        const data = await listOrdersUserCase.execute({
            userId,
            contactStatus,
            paymentMethod,
            paymentStatus,
        })

        response.json(data)
    }
}

export { ListOrdersController }
