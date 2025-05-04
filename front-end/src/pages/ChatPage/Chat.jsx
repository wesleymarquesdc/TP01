import React from 'react'
import { doSignOut } from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";
import "./Chat.css"
import Header from '../../components/Header/Header'
import ChatSidebar from '../../components/Chat/ChatSidebar';
import ChatMain from '../../components/Chat/ChatMain';

const Chat = () => {
        // CONEXÃO COM O BACK-END
        const { currentUser } = useAuth()
        const userName = currentUser.displayName

        const onSignOut = async (e) => {
                e.preventDefault()
                await doSignOut()
        }

        // //////////////////////

        const [chats, setChats] = React.useState([]);
        const [selectedChat, setSelectedChat] = React.useState(null);

        // Simulacao de uma funcao que retorna um vetor com os usuarios (id e nome) que mandaram mensagens 
        const getUsers = () => {
                return new Promise((resolve) => {
                        setTimeout(() => {
                                resolve([
                                { id: 1, name: "Maria" },
                                { id: 2, name: "João" },
                                { id: 3, name: "Rodrigo" },
                                { id: 4, name: "Ana" },
                                { id: 5, name: "Carlos" },
                                { id: 6, name: "Fernanda" },
                                ]);
                        }, 500);
                });
        };
        
        // Busca os chats assim que a página é renderizada
        React.useEffect(() => {
                (async () => {
                try {
                        const chatsData = await getUsers();
                        setChats(chatsData);
                        // Opcional: definir o primeiro chat como padrão selecionado
                        setSelectedChat(chatsData[0]);
                } catch (error) {
                        console.error("Erro ao buscar chats:", error);
                }
                })();
        }, []);

                
        return (
        <>
                <Header userName={userName} onClick={onSignOut} choosePage={"dashboard"}>
                </Header>
                <div className='chat-container'>
                        <div className='chat-page'>
                                <ChatSidebar 
                                chats={chats} 
                                onSelectChat={(chat) => setSelectedChat(chat)}
                                selectedChatId={selectedChat ? selectedChat.id : null}
                                ></ChatSidebar>

                                {selectedChat ? <ChatMain chat={selectedChat}></ChatMain> : <div>Selecione um chat</div>}
                        </div>
                </div>
        </>
        )
}

export default Chat
