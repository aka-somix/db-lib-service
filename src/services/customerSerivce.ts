import { customers } from 'db-lib-database-mgmt';
import { eq } from "drizzle-orm";
import { Customer } from "../@types";
import { pgClient } from '../database/client';

export class CustomerService {

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

  public static async getCustomersFromId(id: string): Promise<Customer | null> {

    const data = await pgClient
      .select()
      .from(customers)
      .where(eq(customers.id, parseInt(id)))
      .limit(1);

    if (data.length === 0) return null;

    const customer = data[0];

    return {
      id: customer.id.toString(),
      name: customer.name ?? "-",
      surname: customer.surname ?? "-",
      phoneNumber: customer.phone ?? "-"
    }
  }
}