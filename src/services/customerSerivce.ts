import { Customer } from "../@types";
import {pgClient} from '../database/client';
// import {customers} from 'db-lib-database-mgmt/src';

export class CustomerService {

  public static async getCustomers(limit?: number): Promise<Customer[]> {

    // const data = await pgClient.select().from(customers).limit(limit ?? 10);

    // return data.map((c) => {
    //   return {
    //     name: c.name ?? "-",
    //     surname: c.surname ?? "-",
    //     phoneNumber: c.phone ?? "-"
    //   }
    // })

    return []
  }

}