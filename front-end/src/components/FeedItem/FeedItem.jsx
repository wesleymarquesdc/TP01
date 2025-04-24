import "../../pages/DashboardPage/Dashboard.css";

import { useState } from 'react';
import PropTypes from 'prop-types';

const FeedItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`feed-item ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="feed-item-header">
        <h3>{item.title}</h3>
        <p className="item-meta">
          {item.type === 'perdido' ? 'Perdido' : 'Encontrado'} • {item.location} • {new Date(item.date).toLocaleDateString()}
        </p>
      </div>
      
      {isExpanded && (
        <div className="feed-item-details">
          <p><strong>Descrição:</strong> {item.description}</p>
          <p><strong>Categoria:</strong> {item.category}</p>
          {item.photo && (
            <div className="item-photo">
              <img src={item.photo} alt={item.title} />
            </div>
          )}
          <button className="contact-button">Entrar em contato</button>
        </div>
      )}
    </div>
  );
};

FeedItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    photo: PropTypes.string,
    type: PropTypes.oneOf(['perdido', 'encontrado']).isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  }).isRequired
};

export default FeedItem;