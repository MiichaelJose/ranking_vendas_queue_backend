import { Request, Response } from "express"
import { ICreateOrderDTO } from "../../dtos/ICreateOrderDTO"
import { CreateOrderQueueUseCase } from "./CreateOrderQueueUseCase"
import HooPayGateway from "@shared/infra/gateways/hoopay";
import HotmartGateway from "@shared/infra/gateways/hotmart";
import { container } from "tsyringe";

class CreateOrderQueueController {
    async handle(request: Request, response: Response) {
        const { gateway, projectId } = request.params;

        const gatewayIntegrations = {
            hoopay: new HooPayGateway(),
            hotmart: new HotmartGateway()
        }
        
        const dataNormalized = await gatewayIntegrations[gateway].normalizeData(projectId, request.body as ICreateOrderDTO);

        const createOrderQueueUseCase = container.resolve(CreateOrderQueueUseCase)
        
        const data = await createOrderQueueUseCase.execute(projectId, dataNormalized)

        response.json(data)
    }
}

export { CreateOrderQueueController }