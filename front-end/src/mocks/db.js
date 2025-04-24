import { factory, primaryKey } from '@mswjs/data';

export const db = factory({
  item: {
    id: primaryKey(Number),
    title: String,
    description: String,
    date: String,
    location: String,
    photo: String,
    type: String, // 'perdido' ou 'encontrado'
    category: String,
    createdAt: String
  }
});

// Preenchido com alguns dados iniciais
db.item.create({
  id: 1,
  title: 'Carteira perdida',
  description: 'Carteira marrom com documentos',
  date: '2023-05-15',
  location: 'Praça da Sé',
  photo: '',
  type: 'perdido',
  category: 'documentos',
  createdAt: new Date().toISOString()
});