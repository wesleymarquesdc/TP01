import React from 'react'
import "../../pages/ChatPage/Chat.css"

const ChatSidebar = ({ onSelectChat,  selectedChatId, chats, loading }) => {
        return (
                <aside className="chat-sidebar">
                        <h2>Chats</h2>
                        {loading ? (
                                <div className="loading-chats">Carregando chats...</div>
                        ) : (
                                <ul className="chat-list">
                                        {chats.map(chat => (
                                        <li 
                                                key={chat.userId} 
                                                className={`chat-item ${selectedChatId === chat.userId ? 'active' : ''}`}
                                                onClick={() => onSelectChat(chat)}
                                                >
                                                {chat.displayName}
                                                {chat.lastMessage && (
                                                        <span className="last-message-preview">
                                                        {chat.lastMessage.text.substring(0, 30)}...
                                                        </span>
                                                )}
                                        </li>
                                        ))}
                                </ul>
                        )}
                </aside>
        )
}

export default ChatSidebar
