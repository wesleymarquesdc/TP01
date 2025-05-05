import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/authContext';
import { useChat } from '../../contexts/chatContext';
import { getChatMessagesFromDB, saveMessageToDB } from '../../firebase/db';

const ChatMain = ({ chat }) => {
        const { currentUser } = useAuth()
        const { data } = useChat();
        const [messages, setMessages] = useState([]);
        const [newMessage, setNewMessage] = useState("");
        const [isLoading, setIsLoading] = useState(true);

        const chatUserName = chat.displayName

        // CONEXÃO COM O BACK-END
        useEffect(() => {
                const unsubscribe = getChatMessagesFromDB(data.chatId, (messages) => {
                    setMessages(messages);
                    setIsLoading(false);
                }, true);
            
                return () => unsubscribe();
        }, [data.chatId]);

        const handleSend = async () => {
                if (!newMessage.trim()) return;
                try{
                        await saveMessageToDB(data.chatId, newMessage)
                }catch(err){
                        console.log(err)
                }
                setNewMessage("");
        };
        /////////////////////////

        return (
                <section className="chat-main">
                        <div className="chat-header">
                                <h2>Chat com {chatUserName}</h2>
                        </div>
                        <div className="chat-messages">
                                {messages.map((message, index) => (
                                        <div key={index} className={`chat-message ${message.senderId === currentUser.uid ? "user" : "other"}`}>
                                        <p>{message.text}</p>
                                        </div>
                                ))}

                        </div>
                        <div className="chat-input-container">
                                <input
                                type="text"
                                placeholder="Digite sua mensagem..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                />
                                <button type="button" onClick={handleSend}>
                                        Enviar
                                </button>
                        </div>
                </section>
        )
}

export default ChatMain
