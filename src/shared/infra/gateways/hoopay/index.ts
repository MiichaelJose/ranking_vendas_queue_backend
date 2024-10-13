import { Order } from "@modules/orders/index/entities/Order";
import { Payment, PaymentData } from "./dtos/IPayloadHoopay";

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
    async normalizeData(projectId: number, data: PaymentData): Promise<Order> {

        const somValue = data.products.reduce((acc, e) => acc + e.price, 0);

        const orderNormalized: Order = {
            projectId,
            externalId: data.orderUUID,
            status: data.payment.status,
            orderPaidAt: new Date(data.paymentDate),
            value: somValue
        };

        return orderNormalized;
    }
}

export default HooPayGateway;