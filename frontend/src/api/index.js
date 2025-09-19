import axios from 'axios';

const API = axios.create({ baseURL: '/api' });

export const fetchProducts = () => API.get('/products');
export const fetchProductById = (id) => API.get(`/products/${id}`);