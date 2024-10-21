interface IProduct {
    title: string
    price: number
    quantity: number
}

interface ICreateOrderDTO {
    externalId?: string
    projectId?: number
    userParticipantId?: number
    status?: 'awaiting' | 'paid'
    value?: number
    customerContactStatus?: 'contacted' | 'not_contacted'
    products?: IProduct[]
    paymentMethod?:
        | 'credit_card'
        | 'debit_card'
        | 'transfer'
        | 'deposit'
        | 'checkout_abandoned'
        | 'billet'
        | 'pix'
        | 'balance'
        | string
    orderPaidAt: Date
}

export { ICreateOrderDTO }
