import React, { useContext, useState, useEffect, useReducer } from "react";
import { useAuth } from "./authContext";

const ChatContext = React.createContext()

export function useChat() {
    return useContext(ChatContext);
}

export function ChatProvider({ children }) {
    const { currentUser } = useAuth()
    
    const INITIAL_STATE = {
        chatId: 'null',
        user: {},
    }

    const chatReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_USER":
                return {
                    user: action.payload,
                    chatId: 
                        currentUser.uid > action.payload.userId
                            ? currentUser.uid + action.payload.userId
                            : action.payload.userId + currentUser.uid
                }
        
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE)

    return (
        <ChatContext.Provider value={{data: state, dispatch}}>
            {children}
        </ChatContext.Provider>
    )
}