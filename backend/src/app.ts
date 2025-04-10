import express from 'express';
import cors from 'cors';

const app = express();

// Load environment variables (optional, if you plan to use .env)
require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(cors());

// Root endpoint for a sanity check
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

export default app;
