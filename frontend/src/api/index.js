import axios from 'axios';

const API = axios.create({ baseURL: 'https://my-3d-viewer-app.duckdns.org' });

// Now these will correctly point to /api/products/products and /api/products/products/:id
export const fetchProducts = () => API.get('/api/products/products');
export const fetchProductById = (id) => API.get(`/api/products/products/${id}`);