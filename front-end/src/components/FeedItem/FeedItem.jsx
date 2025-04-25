import "../../pages/DashboardPage/Dashboard.css";

import React, { useState } from 'react';

const FeedItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={`feed-item ${expanded ? 'expanded' : ''}`}
      onClick={() => setExpanded(!expanded)}>
        
        <h3>{item.title}</h3>
        <p><strong>Local: </strong>{item.location}</p>
        <p><strong>Data: </strong>{item.date}</p>

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


export default FeedItem;