import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { DB_HOST, DB_NAME, DB_PORT, DB_PSW, DB_USER } from "../config";

const pool = new Pool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PSW,
  database: DB_NAME,
});

export const pgClient = drizzle(pool);
