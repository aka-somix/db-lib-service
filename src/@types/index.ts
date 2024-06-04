export interface Customer {
  id: string;
  name: string;
  surname: string;
  phoneNumber: string;
}

export interface Order {
  id: string;
  customer_id: string;
  date: Date;
  status: OrderStatus;
}

export type OrderStatus = "PENDING" | "CONFIRMED" | "CANCELED"
