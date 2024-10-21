import { Application, Router } from 'express'
import { OrdersRoutes } from './orders.routes'

const Routes = (application: Application): void => {
    const RouterApplication = Router()

    RouterApplication.use('/webhook', OrdersRoutes)

    application.use(RouterApplication)
}

export { Routes }
