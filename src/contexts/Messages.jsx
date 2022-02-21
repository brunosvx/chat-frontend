import { createContext, useEffect, useState } from 'react';

import { io } from 'socket.io-client';

export const MessagesContext = createContext({});

const socket = io(import.meta.env.VITE_WSURL || 'ws://localhost:3333');

export function MessageContextProvider({ children }) {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('message', (data) => {
            pushMessage(data);
        });
    }, [])

    
    function pushMessage(message) {
        setMessages(oldMessages => [ ...oldMessages, message ]);
    }

    
    function sendMessage(message) {
        const name = localStorage.getItem('username') || 'unknown';

        pushMessage({ ...message, right: true });
        socket.emit('message', { text: message, name })
    }


    return (
        <MessagesContext.Provider value={{
            messages,
            sendMessage
        }}>
            {children}
        </MessagesContext.Provider>
    )
}