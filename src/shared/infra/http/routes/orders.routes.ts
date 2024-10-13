import { CreateOrderQueueController } from "@modules/orders/index/useCases/createOrderQueue/CreateOrderQueueController";
import { Router } from "express";

const createOrderQueueController = new CreateOrderQueueController()

const OrdersRoutes = Router()

OrdersRoutes.post("/:gateway/:projectId", createOrderQueueController.handle)

export { OrdersRoutes }