import { CreateOrderQueueController } from '@modules/orders/index/useCases/createOrderQueue/CreateOrderQueueController'
import { ListOrdersController } from '@modules/orders/index/useCases/listOrders/ListOrdersController'
import { Router } from 'express'

const createOrderQueueController = new CreateOrderQueueController()
const listOrdersController = new ListOrdersController()

const OrdersRoutes = Router()

OrdersRoutes.post(
    '/receive/orders/:gateway/:projectId',
    createOrderQueueController.handle
)
OrdersRoutes.get('/orders', listOrdersController.handle)

export { OrdersRoutes }
