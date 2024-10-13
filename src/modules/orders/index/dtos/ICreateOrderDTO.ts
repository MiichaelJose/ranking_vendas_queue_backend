interface ICreateOrderDTO {
    externalId?: string;
    projectId?: number;
    userParticipantId?: number;
    status?: 'awaiting' | 'paid';
    value?: number;
}

export { ICreateOrderDTO };
