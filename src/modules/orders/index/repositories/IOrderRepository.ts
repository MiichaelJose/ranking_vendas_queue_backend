import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO';
import { IUpdateOrderDTO } from '../dtos/IUpdateOrderDTO';
import { Order } from '../entities/Order';

interface IOrderRepository {
  getIdByUUID(orderUUID: string): Promise<number>;
  create(content: ICreateOrderDTO): Promise<Order>;
  update(orderId: number, content: IUpdateOrderDTO): Promise<boolean>;

  getStatusProjectByProjectId(projectId: string): Promise<boolean>
  getProjectUsers(projectId: string): Promise<any>
  getLastThreeOrders(projectId: string): Promise<Order[]>
}

export { IOrderRepository };
