import { useState, useEffect } from 'react'
import { doSignOut } from "../../firebase/auth";
import { getUserChatsFromDB } from '../../firebase/db';
import { useAuth } from "../../contexts/authContext";
import { useChat } from '../../contexts/chatContext';
import Header from '../../components/Header/Header'
import ChatSidebar from '../../components/Chat/ChatSidebar';
import ChatMain from '../../components/Chat/ChatMain';
import "./Chat.css"

const Chat = () => {
        const { currentUser } = useAuth()
        const { dispatch } = useChat()
        const [isLoading, setIsLoading] = useState(true);
        const [chats, setChats] = useState([])
        const [selectedChat, setSelectedChat] = useState(null);
        
        const userName = currentUser.displayName
        
        // CONEXÃO COM O BACK-END
        const onSignOut = async (e) => {
                e.preventDefault()
                await doSignOut()
        }

        useEffect(() => {
                const unsubscribe = getUserChatsFromDB((data) => {
                  setChats(data);
                  setIsLoading(false);
                });
              
                return () => unsubscribe();
              }, []);
              

        const handleSelect = (chat) => {
                dispatch({type: "CHANGE_USER", payload: chat})
                setSelectedChat(chat)
        }
        /////////////////////////
                
        return (
        <>
                <Header userName={userName} onClick={onSignOut} choosePage={"dashboard"}>
                </Header>
                <div className='chat-container'>
                        <div className='chat-page'>
                                <ChatSidebar 
                                chats={chats} 
                                loading={isLoading}
                                onSelectChat={(chat) => handleSelect(chat)}
                                selectedChatId={selectedChat ? selectedChat.id : null}
                                ></ChatSidebar>

                                {selectedChat ? <ChatMain chat={selectedChat}></ChatMain> : <div>Selecione um chat</div>}
                        </div>
                </div>
        </>
        )
}

export default Chat
