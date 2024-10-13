import { Queue } from 'bullmq';
import { config } from '@shared/config';
import { BullMonitorExpress } from '@bull-monitor/express';
import { BullMQAdapter } from '@bull-monitor/root/dist/bullmq-adapter';
import OrderQueue from "@shared/infra/bull/queues/orders.queue"


class Queues {
    private arrQueues: Queue[];

    constructor() {
        this.arrQueues = [
            OrderQueue.getQueue()
        ];
    }

    async process(): Promise<any> {
        const monitor = new BullMonitorExpress({
            queues: this.arrQueues.map(
                queue =>
                    new BullMQAdapter(queue)
            ),
            gqlIntrospection: config.get('environment') === 'development',
            metrics: {
                collectInterval: { minutes: 5 },
                maxMetrics: 100
            }
        });

        await monitor.init();

        OrderQueue.getWorker();

        return monitor;
    }
}

export default new Queues();
