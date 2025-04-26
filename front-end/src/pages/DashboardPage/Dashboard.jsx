import "./Dashboard.css"
import React from "react";
import RegisterItem from "../../components/RegisterItem/RegisterItem";


const Dashboard = () => {
    
    const containerRef = React.useRef(null);
    const sidebarRef = React.useRef(null);

    React.useEffect(() => {
        if (sidebarRef.current && containerRef.current) {
        // Obtém a altura real da div 'b' (sidebar)
        const alturaSidebar = sidebarRef.current.getBoundingClientRect().height;
        
        // Define a altura máxima para a div 'a' (container)
        containerRef.current.style.maxHeight = `${alturaSidebar}px`;
        containerRef.current.style.overflowY = "auto"; // Adiciona rolagem interna
        }
    }, []); // Executa o código após o primeiro render

    return (
        <>
            <header className="dashboard-header">
                <h1>Sistema de Achados e Perdidos - Dashboard</h1>
            </header>

            <div className="dashboard-container">

                <div className="dashboard-feed" ref={containerRef}>
                    <h2>Feed de Itens</h2>
                </div>

                <div className="dashboard-sidebar" ref={sidebarRef}>
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