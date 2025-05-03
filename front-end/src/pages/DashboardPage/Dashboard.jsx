import "./Dashboard.css"
import React from "react";
import { doSignOut } from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";
import RegisterItem from "../../components/RegisterItem/RegisterItem";
import Feed from "../../components/Feed/Feed";
import Search from "../../components/Search/Search";
import Header from "../../components/Header/Header";


const Dashboard = () => {
    
    const containerRef = React.useRef(null);
    const sidebarRef = React.useRef(null);

    // CONEXÃO COM O BACK-END
    const { currentUser } = useAuth()
    const userName = currentUser.displayName

    const onSignOut = async (e) => {
        e.preventDefault()
        await doSignOut()
    }
    /////////////////////////

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
            <Header userName={userName} onClick={onSignOut}>
            </Header>

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