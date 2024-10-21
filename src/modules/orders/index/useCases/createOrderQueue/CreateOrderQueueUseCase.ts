import { ICreateOrderDTO } from '../../dtos/ICreateOrderDTO'
import OrderQueue from '@shared/infra/bull/queues/orders.queue'
import { AppError } from '@shared/utils/AppError'
import { IOrderRepository } from '../../repositories/IOrderRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class CreateOrderQueueUseCase {
    private orderQueue: any

    constructor(
        @inject('OrderRepository')
        private orderRepository: IOrderRepository
    ) {
        this.orderQueue = OrderQueue.getQueue()
    }

    async execute(
        projectId: string,
        data: ICreateOrderDTO
    ): Promise<ICreateOrderDTO> {
        const inactiveProject: boolean =
            await this.orderRepository.getStatusProjectByProjectId(projectId)

        if (inactiveProject) {
            throw new AppError([
                {
                    message: 'Project status is inactive',
                    uniqueCode: 'VALIDATE_CODE_STATUS:STATUS_INACTIVE',
                },
            ])
        }

        if (data.status != 'awaiting' && data.status != 'paid') {
            throw new AppError([
                {
                    message: 'Status does not exist',
                    uniqueCode: 'VALIDATE_CODE_STATUS:STATUS_NOT_EXIST',
                },
            ])
        }

        const participantsTeamProject =
            await this.orderRepository.getProjectUsers(projectId)

        const orders = await this.orderRepository.getLastThreeOrders(projectId)

        const participantUsageCount: { [key: number]: number } = {}

        // Inicializa o contador para cada participante que está no participantsTeamProject
        participantsTeamProject.forEach(participant => {
            participantUsageCount[participant.userId] = 0 // Inicializa o contador para cada userId
        })

        // Conta o número de vezes que cada userParticipant foi usado nas ordens
        orders.forEach(order => {
            const userId = order.userParticipantId // Captura o userParticipantId da ordem
            // Verifica se o userId está no participantUsageCount antes de incrementá-lo
            if (
                userId !== undefined &&
                participantUsageCount[userId] !== undefined
            ) {
                participantUsageCount[userId]++ // Incrementa o contador para o userParticipant correspondente
            }
        })

        // Encontra o próximo participante que tem menos ordens associadas
        const nextParticipant = participantsTeamProject.reduce(
            (prev, current) => {
                const prevCount = participantUsageCount[prev.userId] || 0 // Conta as ordens do participante anterior
                const currentCount = participantUsageCount[current.userId] || 0 // Conta as ordens do participante atual
                // Se o participante atual foi usado menos vezes que o anterior, ou se o anterior não foi usado
                return currentCount < prevCount ? current : prev // Retorna o atual como o próximo participante
            }
        )

        data.userParticipantId = nextParticipant.userId

        const queue = await this.orderQueue.add(
            'processOrder',
            {
                ...data,
            },
            {
                attempts: 3,
                backoff: 1000,
                removeOnComplete: 1000,
            }
        )

        return queue.data
    }
}

export { CreateOrderQueueUseCase }
