import { Job } from 'bullmq'
import { OrderInsertUseCase } from './OrderInsertUseCase'
import { container } from 'tsyringe'

class OrderInsertController {
    async handle(job: Job): Promise<boolean> {
        const orderInsertUseCase = container.resolve(OrderInsertUseCase)

        const jobs: any = await orderInsertUseCase.execute(job)

        return true
    }
}

export { OrderInsertController }
