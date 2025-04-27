import "../../pages/DashboardPage/Dashboard.css";

import React, { useState } from 'react';
import ViewMoreButton from "../Button/ViewMoreButton";
import CloseButton from "../Button/CloseButton";

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

        {/* Logica para abrir e fechar o botao */}
        {!expanded 
          ? (
            <ViewMoreButton 
              onClick={() => setExpanded(true)} 
              style={{ padding: "5px 3px", fontSize: "12px" }}
            >
              Ver mais
            </ViewMoreButton>
          ) 
          : (
            <CloseButton 
              onClick={() => setExpanded(false)} 
              style={{ padding: "5px 3px", fontSize: "12px" }}
            >
              Fechar
            </CloseButton>
        )}
      
    </div>
  );
};


export default FeedItem;