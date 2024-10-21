import { IOrderRepository } from '../../repositories/IOrderRepository'
import { ICreateOrderDTO } from '../../dtos/ICreateOrderDTO'
import { inject, injectable } from 'tsyringe'

@injectable()
class CreateWhenNotExistOrderUseCase {
    constructor(
        @inject('OrderRepository')
        private orderRepository: IOrderRepository
    ) {}

    async execute({
        uuid,
        organizationId,
        affiliateId,
        src,
        methodId,
        statusId,
        amount,
        amountReference,
        finishedAt,
    }: ICreateOrderDTO): Promise<number> {
        // const orderId = await this.orderRepository.getIdByUUID(uuid);

        const order = await this.orderRepository.create({
            uuid,
            organizationId,
            affiliateId,
            src,
            methodId,
            statusId,
            amount,
            amountReference,
            finishedAt,
        })

        return order.id
    }
}

export { CreateWhenNotExistOrderUseCase }
