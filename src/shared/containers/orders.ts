import { container } from 'tsyringe';

import { OrderRepository } from '@modules/orders/index/infra/knex/repositories/OrderRepository';
import { IOrderRepository } from '@modules/orders/index/repositories/IOrderRepository';

container.registerSingleton<IOrderRepository>('OrderRepository', OrderRepository);
