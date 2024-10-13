interface Payment {
    hasErrors: boolean;
    status: 'awaiting' | 'paid';
    message: string;
    charges: Charge[];
}

interface Charge {
    uuid: string;
    amount: number;
    installments: string;
    card: Card;
    type: string;
    hasErrors: boolean;
    status: string;
}

interface Card {
    cardToken: string;
}

interface Customer {
    email: string;
    name: string;
    phone: Phone;
    document: Document;
    address: Address;
}

interface Phone {
    phoneNumber: string;
    masked: string;
    numbersOnly: string;
}

interface Document {
    number: string;
    type: string;
}

interface Address {
    zipcode: string;
    street: string;
    streetNumber: string;
    neighborhood: string;
    complement: string;
    city: string;
    state: string;
}

interface Data {
    src: string;
    browser: string;
    version: string;
    platform: string;
    source: string;
    url: string;
    urlRefer: string;
    ip: string;
    cookie: string;
}

interface Commission {
    userId: number;
    type: string;
    amount: number;
}

interface Product {
    value: void;
    title: string;
    price: number;
    quantity: number;
}

interface PaymentData {
    payment: Payment;
    customer: Customer;
    data: Data;
    commissions: Commission[];
    products: Product[];
    paymentDate: string;
    orderUUID: string;
}

export { Payment, Charge, Card, Customer, Phone, Document, Address, Data, Commission, Product, PaymentData };
