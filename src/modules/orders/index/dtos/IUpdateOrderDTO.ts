interface IUpdateOrderDTO {
  statusId: number;
  src?: string;
  clientId?: number;
  amountReference?: number;
  discount?: number;
  interestFee?: number;
  amount?: number;
  shippingPrice?: number;
  couponDiscountId?: number;
  recurrency?: boolean;
  subscriptionId?: number;
  finishedAt?: Date;
}

export { IUpdateOrderDTO };
