import express from 'express';
import { getAllProducts, getProductById } from '../controllers/productController.js';

const router = express.Router();

// GET /api/products - Fetches all products for the gallery
router.get('/', getAllProducts);

// GET /api/products/:id - Fetches details for a single product
router.get('/:id', getProductById);

export default router;