import React from 'react'
import Item from './Item'
import ViewMoreButton from '../Button/ViewMoreButton';
import CloseButton from '../Button/CloseButton';

const ExpandedItem = ({ item, estiloBotao }) => {
        const [expanded, setExpanded] = React.useState();

        return (
                <div 
                className={`feed-item ${expanded ? 'expanded' : ''}`}
                onClick={() => setExpanded(!expanded)}>
                        
                        <Item item={item}></Item>

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
                                        style={{...estiloBotao}}
                                >
                                        Ver mais
                                </ViewMoreButton>
                        ) 
                        : (
                                <CloseButton 
                                        onClick={() => setExpanded(false)} 
                                        style={{...estiloBotao}}
                                >
                                        Fechar
                                </CloseButton>
                        )}
                
                </div>
        )
}

export default ExpandedItem
