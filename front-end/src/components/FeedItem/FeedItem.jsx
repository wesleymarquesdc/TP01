import "../../pages/DashboardPage/Dashboard.css";

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FeedItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={`feed-item ${expanded ? 'expanded' : ''}`}
      onClick={() => setExpanded(!expanded)}>
        
        <h3>{item.title}</h3>
        <p><strong>Local: </strong>{item.location}</p>
        <p><strong>Data: </strong>{item.location}</p>

        {expanded && (
          <div className="details">
            {item.photo && <img src={item.photo} alt={item.title} className="item-photo" />}
            <p><strong>Descrição:</strong> {item.description || 'Sem descrição'}</p>
            <p><strong>Categoria:</strong> {item.category}</p>
            <p><strong>Tipo:</strong> {item.type}</p>
          </div>
        )}

      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Fechar' : 'Ver mais'}
      </button>      
      
    </div>
  );
};

FeedItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
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