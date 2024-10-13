import { ICreateOrderDTO } from '@modules/orders/index/dtos/ICreateOrderDTO';
import { IUpdateOrderDTO } from '@modules/orders/index/dtos/IUpdateOrderDTO';
import { Order } from '@modules/orders/index/entities/Order';
import { IOrderRepository } from '@modules/orders/index/repositories/IOrderRepository';
import { connection } from '@shared/infra/knex';

class OrderRepository implements IOrderRepository {
    async update(
        orderId: number,
        {
            statusId,
            src,
            clientId,
            amountReference,
            discount,
            interestFee,
            amount,
            shippingPrice,
            couponDiscountId,
            recurrency,
            subscriptionId,
            finishedAt
        }: IUpdateOrderDTO
    ): Promise<boolean> {
        const numberOfUpdates = await connection('orders')
            .withSchema('orders')
            .where({ id: orderId })
            .update({
                statusId,
                src,
                clientId,
                amountReference,
                discount,
                interestFee,
                amount,
                shippingPrice,
                couponDiscountId,
                recurrency,
                subscriptionId,
                finishedAt
            });

        return numberOfUpdates > 0;
    }

    async getIdByUUID(orderUUID: string): Promise<number> {
        const order = await connection('orders')
            .select({ id: 'id' })
            .where({ uuid: orderUUID })
            .first();

        return order?.id;
    }

    async create(orderData: ICreateOrderDTO): Promise<Order> {
        const order = new Order();

        Object.assign(order, orderData);

        const [orderId] = await connection('orders')
            .withSchema('projects')
            .insert(order)
            // .onConflict('externalId', 'gatewayId') // on conlfit vai validar se o registro ja existe no banco e não deixa duplicar
            // .merge()
            .returning('id');

        order.id = orderId;

        return order;
    }

    async getStatusProjectByProjectId(projectId: string): Promise<boolean> {
        const project = await connection
        .withSchema("projects")
        .from("projects")
        .select({ status: "status" })
        .where({ id: projectId, status: "active" })
        .first();

        return !project
    }

    async getProjectUsers(projectId: string): Promise<any> {
        return await connection
        .select({
            userId: "teams_participants.userId",  // Seleciona o ID do participante
            teamId: "teams.id",                // Seleciona o ID do time
            projectId: "projects.id",          // Seleciona o ID do projeto
            // Adicione mais campos conforme necessário
          })
          .from("projects.teams_participants")           // Tabela de participantes dos times
          .innerJoin("projects.teams", "teams_participants.teamId", "teams.id") // Junção com a tabela de times
          .innerJoin("projects.projects", "teams.projectId", "projects.id") // Junção com a tabela de projetos
          .where("projects.id", projectId)
          .orderBy("teams_participants.id", "desc")           
    }

    async getLastThreeOrders(projectId: string): Promise<any> {
        const orders = await connection
        .withSchema("projects")
        .from("orders")
        .select({ 
            projectId: "projectId",
            userParticipantId: "userParticipantId",
        })
        .where({ projectId: projectId })
        .orderBy("createdAt", "desc") // Ordena por projectId em ordem decrescente
        .limit(3); // Limita a 3 resultados

        return orders
    }
}
export { OrderRepository };
