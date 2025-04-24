import "../../pages/DashboardPage/Dashboard.css"


import { useEffect, useState } from 'react';
import FeedItem from '../FeedItem/FeedItem.jsx';

const Feed = ({ type = 'perdido' }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/items?type=${type}&_sort=createdAt&_order=desc`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [type]);

  if (isLoading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">Erro: {error}</div>;
  if (items.length === 0) return <div className="no-items">Nenhum item encontrado</div>;

  return (
    <div className="feed-container">
      <h2 className="feed-title">Feed de Itens {type === 'perdido' ? 'Perdidos' : 'Encontrados'}</h2>
      <div className="feed-items">
        {items.map(item => (
          <FeedItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Feed;