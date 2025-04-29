import React from 'react'
import "../../pages/DashboardPage/Dashboard.css"

const UserItems = ({item, user}) => {
        const [ showUserItems, setShowUserItems] = React.useState(false);

        const handleSelectChange = (event) => {
                setOpcaoSelecionada(event.target.value);
        };

        return (
                <article className='user-modal-container'>
                        <div className='close-modal-button'>
                                <button onClick={() => setShowUserItems(false)}>X</button>
                        </div>

                        <section className='feed-user-items'>
                                <h2>Itens</h2>
                                <select name="type" 
                                value={item.type} 
                                onChange={handleSelectChange}>
                                        <option value="todos">Todos</option>
                                        <option value="perdidos">Perdidos</option>
                                        <option value="encontrados">Encontrados</option>
                                </select>


                        </section>
                                {
                                        showUserItems ? (
                                                <SlideInModalItem item={item}> 
                                                        <div>
                                                                
                                                        </div>
                                                </SlideInModalItem>
                                        )  : <p>Você não tem itens para esse filtro</p>
                                }
                </article>
        )
}

export default UserItems
