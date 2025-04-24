import { rest } from 'msw';
import { db } from './db';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const handlers = [
  // Criar novo item
  rest.post(`${API_BASE_URL}/items`, (req, res, ctx) => {
    const newItem = db.item.create({
      ...req.body,
      id: Date.now(),
      createdAt: new Date().toISOString()
    });
    
    return res(
      ctx.delay(200),
      ctx.status(201),
      ctx.json(newItem)
    );
  }),

  // Listar categorias (opcional)
  rest.get(`${API_BASE_URL}/categories`, (req, res, ctx) => {
    return res(
      ctx.delay(100),
      ctx.json({
        categories: ['documentos', 'eletrônicos', 'vestuário', 'outros']
      })
    );
  }),

  rest.get(`${API_BASE_URL}/items`, (req, res, ctx) => {
    const type = req.url.searchParams.get('type');
    const sort = req.url.searchParams.get('_sort');
    const order = req.url.searchParams.get('_order');
    
    let items = db.item.getAll();
    
    if (type) {
      items = items.filter(item => item.type === type);
    }
    
    if (sort && order) {
      items.sort((a, b) => {
        if (order === 'asc') {
          return a[sort] > b[sort] ? 1 : -1;
        } else {
          return a[sort] < b[sort] ? 1 : -1;
        }
      });
    }
    
    return res(
      ctx.delay(150),
      ctx.json(items)
    );
  })
];