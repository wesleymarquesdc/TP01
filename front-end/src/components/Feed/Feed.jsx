import "../../pages/DashboardPage/Dashboard.css"
import { useEffect, useState } from 'react';
import { useCategory } from "../../contexts/categoryContext.jsx";
import FeedItem from '../Item/FeedItem.jsx';
import { getItensFromDB } from "../../firebase/db.jsx";

const Feed = () => {
  const { selectedCategory } = useCategory();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // CONEXÃO COM O BACK-END
  useEffect(() => {
    const unsubscribe = getItensFromDB((data) => {
      setItems(data);
      setIsLoading(false);
    }, false, selectedCategory);

    return () => unsubscribe();
  }, [selectedCategory]);
  /////////////////////////

  if (isLoading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">Erro: {error}</div>;
  if (items.length === 0) return <div className="no-items">Nenhum item encontrado</div>;

  return (
    <>
      {items ? 
        <div className="feed-items">
          {items.map(item => (
            <FeedItem key={item.id} item={item} />
          ))}
        </div> : <div>Nao foi possivel carregar o feed</div>
      }
    </>
  );
};

export default Feed;