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
  })
];