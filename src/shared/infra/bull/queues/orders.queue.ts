import { OrderInsertController } from '@modules/orders/index/useCases/orderInsert/OrderInsertController'
import { RedisClient } from '@shared/infra/redis'
import { Queue, Worker } from 'bullmq'
import Redis from 'ioredis'

class OrderQueue {
    private queue: Queue
    private connection: Redis
    private concurrency: number
    private orderInsertController: any

    constructor() {
        this.connection = RedisClient
        this.queue = new Queue('Order-Process', { connection: this.connection })
        this.orderInsertController = new OrderInsertController()
        this.concurrency = 5
    }

    getWorker() {
        return new Worker('Order-Process', this.orderInsertController.handle, {
            concurrency: this.concurrency,
            connection: this.connection,
        })
    }

    getQueue() {
        return this.queue
    }
}

export default new OrderQueue()
