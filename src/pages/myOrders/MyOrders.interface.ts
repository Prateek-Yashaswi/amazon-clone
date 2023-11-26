export interface BasicInfoItem {
  heading: string;
  content: string;
}

export interface CardData extends OrderData {
  basicInfoItem: BasicInfoItem[];
  orderId: string;
}

export interface OrderData {
  deliveryDate: string;
  handedToWhom: string;
  productDetails: string;
  productImage: string;
  returnWindow: string;
}
