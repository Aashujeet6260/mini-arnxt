import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';

// Initialize configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/products', productRoutes);

// Health check route
app.get('/', (req, res) => {
    res.send('API server is up and running.');
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});