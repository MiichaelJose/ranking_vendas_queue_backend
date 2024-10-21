import { inject, injectable } from 'tsyringe'
import { IOrderRepository } from '../../repositories/IOrderRepository'
import { AppError } from '@shared/utils/AppError'

@injectable()
class OrderInsertUseCase {
    constructor(
        @inject('OrderRepository')
        private orderRepository: IOrderRepository
    ) {}

    async execute(job) {
        await this.orderRepository.create(job.data)
    }
}

export { OrderInsertUseCase }
