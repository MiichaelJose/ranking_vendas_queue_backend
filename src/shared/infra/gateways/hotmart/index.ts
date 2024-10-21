import { Order } from '@modules/orders/index/entities/Order'
import { PaymentData } from './dtos/IPayloadHoopay'

class HotmartGateway {
    async normalizeData(data: PaymentData): Promise<Order> {
        const orderNormalized: Order = {}

        return orderNormalized
    }
}

export default HotmartGateway
