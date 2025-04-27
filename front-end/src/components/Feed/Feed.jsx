import "../../pages/DashboardPage/Dashboard.css"


import { useEffect, useState } from 'react';
import FeedItem from '../FeedItem/FeedItem.jsx';
import axios from "axios";

const Feed = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  function getItems(){
    // Substitua pelo back-end real:
    axios.get(`${BASE_URL}/items`)
      .then(res => {
          setItems(res.data)
          setIsLoading(false)
      })
      .catch(err => {
        console.error('Erro ao carregar itens:', err)
        setError(err)
      })
  }

  useEffect( () => {
    getItems();
  }, []);

  

  if (isLoading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">Erro: {error}</div>;
  if (items.length === 0) return <div className="no-items">Nenhum item encontrado</div>;

  return (
    <>
      <div className="feed-items">
        {items.map(item => (
          <FeedItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Feed;