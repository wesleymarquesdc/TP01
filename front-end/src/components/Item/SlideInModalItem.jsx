import React, { Children } from 'react'
import ChatButton from '../Button/ChatButton';
import Item from './Item';
import ViewMoreButton from '../Button/ViewMoreButton';
import CloseButton from '../Button/CloseButton';
import './style.css'

const SlideInModalItem = ({item, children, estiloBotao}) => {
        const [showModal, setShowModal] = React.useState(false);

        return (
                <div className='modal-container'> 
                        <div style={{display: "flex", justifyContent: "space-between", marginBottom: "15px"}}>
                                <div>
                                        <Item item={item}></Item>
                                </div>

                                <div style={{display: "grid", alignContent: "center"}}>
                                        <ViewMoreButton onClick={() => setShowModal(true)} style={ {...estiloBotao} } ></ViewMoreButton>
                                </div>
                        </div>
                
                {showModal && (
                        <div className='modal-overlay'>
                                <div className="modal-content">
                                
                                        <h3 >{item.title}</h3>
                                        <div>
                                                <p><strong>Local:</strong> {item.location}</p>
                                                <p><strong>Data:</strong> {item.date}</p>
                                        </div>

                                        <div className='image'>
                                                {item.photo && (
                                                        <img 
                                                                src={item.photo} 
                                                                alt={item.title} 
                                                                className="item-photo" 
                                                        />
                                                )}
                                        </div>

                                        <div className="details">
                                                <p><strong>Descrição:</strong> {item.description || 'Sem descrição'}</p>
                                                <p><strong>Categoria:</strong> {item.category}</p>
                                                <p><strong>Tipo:</strong> {item.type}</p>
                                        </div>

                                        {/* Botão para iniciar chat pode ser colocado aqui */}
                                        { children }

                                        {/* Botão para fechar o modal */}
                                        <div>
                                                <CloseButton onClick={() => setShowModal(false)} style={{fontSize: '14px'}}>Fechar</CloseButton>

                                        </div>
                                </div>
                        </div>
                )}
                </div>
        )
}

export default SlideInModalItem
