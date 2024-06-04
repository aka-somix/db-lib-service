import { customers, orders } from 'db-lib-database-mgmt';
import { eq } from "drizzle-orm";
import { Customer, Order, OrderStatus } from "../@types";
import { pgClient } from '../database/client';

export class OrderService {

    public static async getCustomers(limit?: number): Promise<Customer[]> {

        const data = await pgClient.select().from(customers).limit(limit ?? 10);

        return data.map((c) => {
            return {
                id: c.id.toString(),
                name: c.name ?? "-",
                surname: c.surname ?? "-",
                phoneNumber: c.phone ?? "-"
            }
        })
    }

    private static parseStatusFrom(parsable: string | null): OrderStatus {
        return "PENDING";
    }

    public static async getAllFromCustomer(customer_id: string): Promise<Order[]> {
        const data = await pgClient
            .select()
            .from(orders)
            .where(eq(orders.customer_id, parseInt(customer_id)))
            .limit(1);

        return data.map((o) => {
            return {
                id: o.id.toString(),
                customer_id: o.customer_id.toString(),
                date: o.date ?? new Date("01-01-1975"),
                status: OrderService.parseStatusFrom(o.status)
            }
        })
    }
}