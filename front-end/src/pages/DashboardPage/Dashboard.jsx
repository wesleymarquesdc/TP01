import "./Dashboard.css"

import RegisterItem from "../../components/RegisterItem/RegisterItem";
import Feed from "../../components/Feed/Feed";

const Dashboard = () => {
    return (
        <>
            <header className="dashboard-header">
                <h1>Sistema de Achados e Perdidos da UFMG - Dashboard</h1>
            </header>

            <div className="dashboard-container">
                <Feed></Feed>

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

                    <RegisterItem></RegisterItem>
                    
                    <section className="notifications-section">
                        <h2>Notificações</h2>
                        <ul>
                            
                        </ul>
                    </section>
                    
                    
                    

                </div>
            </div>
        </>
    )
}

export default Dashboard;