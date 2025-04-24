import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Sistema de Achados e Perdidos da UFMG - Dashboard</h1>
            </header>

            <div className="dashboard-container">
                <div className="dashboard-feed">
                <h2>Feed de Itens Perdidos</h2>
                <div className="feed-item">
                    <h3>Chaveiro</h3>
                    <p>Perdido próximo ao Bloco A - 10/04</p>
                </div>
                <div className="feed-item">
                    <h3>Celular</h3>
                    <p>Perdido na Biblioteca - 11/04</p>
                </div>
                <div className="feed-item">
                    <h3>Óculos</h3>
                    <p>Perdido no prédio de Engenharia - 12/04</p>
                </div>
                </div>

                <div className="dashboard-sidebar">
                    <section className="search-section">
                        <h2>Buscar por Categoria</h2>
                        <form>
                        <select name="categoria" id="categoria">
                            <option value="">Selecione uma categoria</option>
                            <option value="eletronicos">Eletrônicos</option>
                            <option value="vestuario">Vestuário</option>
                            <option value="documentos">Documentos</option>
                            <option value="acessorios">Acessórios</option>
                        </select>
                        <button type="submit">Buscar</button>
                        </form>
                    </section>

                    
                    <section className="notifications-section">
                        <h2>Notificações</h2>
                        <ul>
                        <li>Item cadastrado com sucesso!</li>
                        <li>Item encontrado: verifique sua caixa de mensagens.</li>
                        </ul>
                    </section>

                    <section className="register-section">
                        <h2>Cadastrar Item Perdido</h2>
                        <form>
                        <label htmlFor="item-name">Nome do Item</label>
                        <input type="text" id="item-name" name="item-name" placeholder="Digite o nome do item" required />

                        <label htmlFor="item-desc">Descrição</label>
                        <textarea id="item-desc" name="item-desc" placeholder="Detalhes do item" rows="3"></textarea>

                        <label htmlFor="item-category">Categoria</label>
                        <select name="item-category" id="item-category">
                            <option value="">Selecione uma categoria</option>
                            <option value="eletronicos">Eletrônicos</option>
                            <option value="vestuario">Vestuário</option>
                            <option value="documentos">Documentos</option>
                            <option value="acessorios">Acessórios</option>
                        </select>

                        <button type="submit">Cadastrar Item</button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;