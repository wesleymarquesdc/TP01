import "./Dashboard.css"
import { doSignOut } from "../../firebase/auth";
import React from "react";
import RegisterItem from "../../components/RegisterItem/RegisterItem";
import Feed from "../../components/Feed/Feed";
import Search from "../../components/Search/Search";


const Dashboard = () => {
    
    const containerRef = React.useRef(null);
    const sidebarRef = React.useRef(null);

    const onSignOut = async (e) => {
        e.preventDefault()
        await doSignOut()
    }

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
                <button onClick={onSignOut}>Sair</button>
            </header>

            <div className="dashboard-container">

                <div className="dashboard-feed" ref={containerRef}>
                    <h2>Feed de Itens</h2>
                    <Feed></Feed>
                </div>

                <div className="dashboard-sidebar" ref={sidebarRef}>
                    
                    <Search></Search>

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