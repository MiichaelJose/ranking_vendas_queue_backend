import { IOrderRepository } from '../../repositories/IOrderRepository'
import { inject, injectable } from 'tsyringe'
import { Order } from '../../entities/Order'

@injectable()
class ListOrdersUserCase {
    constructor(
        @inject('OrderRepository')
        private orderRepository: IOrderRepository
    ) {}

    async execute({
        userId,
        contactStatus,
        paymentMethod,
        paymentStatus,
    }): Promise<Order[]> {
        const orders = await this.orderRepository.getOrders(
            userId,
            contactStatus,
            paymentMethod,
            paymentStatus
        )

        return orders
    }
}

export { ListOrdersUserCase }
