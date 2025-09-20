import axios from 'axios';

// The base URL for all API requests
const API = axios.create({ baseURL: 'https://my-3d-viewer-app.duckdns.org' });

// Correctly fetches all products from GET /api/products
export const fetchProducts = () => API.get('/api/products');

// Correctly fetches a single product from GET /api/products/:id
export const fetchProductById = (id) => API.get(`/api/products/${id}`); 