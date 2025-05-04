import React from 'react'
import "../../pages/DashboardPage/Dashboard.css"
import SlideInModalItem from '../Item/SlideInModalItem';
import { getItensFromDB } from "../../firebase/db.jsx";
import "./style.css"


const UserItems = ( {onClose} ) => {
        const [ items , setItems]= React.useState([]);
        const [isLoading, setIsLoading] = React.useState(true);
        const [selectedType, setSelectedType] = React.useState("todos"); // Estado para armazenar seleção

        
        React.useEffect(() => {
                async function getItems() {
                        const unsubscribe = getItensFromDB((data) => {
                                setItems(data);
                                setIsLoading(false);
                        },  true);
        
                        return () => unsubscribe();
                }

                getItems();
        }, []);

        const handleSelectChange = (event) => {
                setSelectedType(event.target.value);
        };

        
        // Filtrando os itens pelo tipo selecionado 
        const filteredItems = items.filter(item => 
                (selectedType === "todos" || item.type === selectedType) 
        );

        return (
                <div className='user-modal-overlay'> 
                        <section className='user-modal-content'>
                                <button className='close-modal-button' onClick={onClose}>X</button>

                                <div>
                                        <h2>Itens</h2>
                                        <select name="type" 
                                                value={selectedType} 
                                                onChange={handleSelectChange}>
                                                        <option value="todos">Todos</option>
                                                        <option value="perdidos">Perdidos</option>
                                                        <option value="encontrados">Encontrados</option>
                                        </select>        
                                </div>
                        
                                {isLoading ? (
                                        <p>Carregando itens...</p>
                                ) : filteredItems.length > 0 ? (
                                        <div className="user-feed-item">
                                                        {filteredItems.map(item => (
                                                                <SlideInModalItem key={item.id} item={item} />
                                                        ))}
                                                </div>
                                        ) : (
                                                <div>
                                        Você não tem itens para este filtro.
                                </div>
                                )}
                        </section>


                </div>
        )
}

export default UserItems
