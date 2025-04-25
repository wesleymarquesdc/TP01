import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL, // ex: http://localhost:3001
});

export const getItems = () => api.get('/items');
export const createItem = data => api.post('/items', data);

export default api;