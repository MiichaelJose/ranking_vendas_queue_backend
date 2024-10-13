import { v4 as uuidV4 } from 'uuid';

class Order {
  id?: number;

  uuid?: string;
  externalId?: string;
  projectId?: number;

  userParticipantId?: number;
  status?: 'awaiting' | 'paid';
  value?: number;

  orderCreatedAt?: Date;
  orderPaidAt?: Date;
  updatedAt?: Date;
  createdAt?: Date;

  constructor() {
    if (!this.id) {
      this.uuid = uuidV4();
      this.orderCreatedAt = new Date();
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  }
}

export { Order };
