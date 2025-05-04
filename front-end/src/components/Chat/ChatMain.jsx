import React from 'react'


const ChatMain = ({ chat }) => {
        const actualUserId = 0; // Supor que o id user atual eh 0 
        const otherUserName = chat.name;
        
        const [messages, setMessages] = React.useState([]);
        const [newMessage, setNewMessage] = React.useState("");

        // FUNCAO PARA SIMULAR 
        // Função simulada para buscar as mensagens do chat selecionado
        // as mensagens tem o id de quem participa, o id=0 e do usuario
        const getChatMessages = (chatId) => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    // Simula um vetor de vetores onde cada subvetor contém as mensagens de um chat específico.
                    const simulatedMessages = [
                      // Chat com chatId 1 (ex: Maria)
                      [
                        { text: "Olá, bem-vindo ao chat com Maria", id: 1 },
                        { text: "Como posso ajudar você hoje?", id: 1 },
                        { text: "Oi, preciso de informações.", id: 0 },
                      ],
                      // Chat com chatId 2 (ex: João)
                      [
                        { text: "Bem-vindo ao chat com João", id: 2 },
                        { text: "Tudo bem? Precisa de ajuda?", id: 2 },
                        { text: "Sim, estou com um problema.", id: 0 },
                      ],
                      // Chat com chatId 3 (ex: Rodrigo)
                      [
                        { text: "Olá, este é o chat com Rodrigo", id: 3 },
                        { text: "Como vai?", id: 3 },
                        { text: "Estou bem, obrigado.", id: 0 },
                      ],
                      // Chat com chatId 4 (ex: Ana)
                      [
                        { text: "Olá, bem-vindo ao chat com Ana", id: 4 },
                        { text: "No que posso ajudar?", id: 4 },
                        { text: "Tenho uma dúvida.", id: 0 },
                      ],
                      // Chat com chatId 5 (ex: Carlos)
                      [
                        { text: "Bem-vindo ao chat com Carlos", id: 5 },
                        { text: "Precisa de alguma coisa?", id: 5 },
                        { text: "Sim, gostaria de saber mais.", id: 0 },
                      ],
                      // Chat com chatId 6 (ex: Fernanda)
                      [
                        { text: "Olá, esta é a conversa com Fernanda", id: 6 },
                        { text: "Em que posso ajudar?", id: 6 },
                        { text: "Tenho uma dúvida sobre meu pedido.", id: 0 },
                      ],
                    ];
              
                    // Como os índices do array começam em 0, para o chatId 1 usamos o índice 0.
                    const messagesForChat = simulatedMessages[chatId - 1] || [];
                    resolve(messagesForChat);
                  }, 500); // Simula um delay de 0.5 segundo
                });
        };
        

        // Sempre que o chat selecionado mudar, buscamos as mensagens
        React.useEffect(() => {
                if (chat) {
                        (async () => {
                                try {
                                        const msgs = await getChatMessages(chat.id);
                                        setMessages(msgs);
                                } catch (error) {
                                        console.error("Erro ao buscar mensagens:", error);
                                }
                        })();
                }
        }, [chat]);

        const handleSend = () => {
                if (!newMessage.trim()) return;
                const messageObject = { text: newMessage, id: actualUserId };
                setMessages((prevMessages) => [...prevMessages, messageObject]);
                setNewMessage("");

                // Aqui você poderia também enviar a mensagem para o backend
        };

        

        return (
                <section className="chat-main">
                        <div className="chat-header">
                                <h2>Chat com {otherUserName}</h2>
                        </div>
                        <div className="chat-messages">
                                {messages.map((message, index) => (
                                        <div
                                        key={index}
                                        className={`chat-message ${message.id === actualUserId ? "user" : "other"}`}
                                        >
                                                {message.text}
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
