// src/server.ts
import express, { Request, Response } from 'express';
import path from 'path';
import { CustomerService } from './services/customerSerivce';
import { OrderService } from './services/orderService';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

// Example route with parameter
app.get('/customer', async (req: Request, res: Response) => {
  const customers = await CustomerService.getCustomers()
  res.send(customers);
});

app.get('/customer/{id}', async (req: Request, res: Response) => {

  const { id } = req.params;

  const customers = await CustomerService.getCustomersFromId(id)
  res.send(customers);
});

app.get('/customer/{id}/order', async (req: Request, res: Response) => {
  const { id } = req.params;

  const customers = await OrderService.getAllFromCustomer(id)
  res.send(customers);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
