import { Order } from '@modules/orders/index/entities/Order'
import { Payment, PaymentData } from './dtos/IPayloadHoopay'
import { ICreateOrderDTO } from '@modules/orders/index/dtos/ICreateOrderDTO'

/*
CRIAR ENUMS


processing
authorized
paid
refunded
waiting_payment
pending_refund
refused
chargedback
analyzing
pending_review
checkout_abandoned
status_waiting
recurrency
cancelled
undefined
refund_partial
expired_payment
*/

class HooPayGateway {
    async normalizeData(
        projectId: number,
        data: PaymentData
    ): Promise<ICreateOrderDTO> {
        const somValue = data.products.reduce((acc, e) => acc + e.price, 0)

        const orderNormalized: ICreateOrderDTO = {
            projectId,
            externalId: data.orderUUID,
            status: data.payment.status,
            orderPaidAt: new Date(data.paymentDate),
            value: somValue,
            customerContactStatus: 'not_contacted',
            paymentMethod: data.payment.charges[0].type.toLowerCase(),
            products: data.products.map(product => ({
                title: product.title,
                price: product.price,
                quantity: product.quantity,
            })),
        }

        return orderNormalized
    }
}

export default HooPayGateway
