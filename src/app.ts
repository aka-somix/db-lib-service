// src/server.ts
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Example route with parameter
app.get('/hello/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

// Example POST route
app.post('/data', (req: Request, res: Response) => {
  const data = req.body;
  res.json({ receivedData: data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
