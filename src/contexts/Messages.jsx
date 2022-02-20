import { createContext, useEffect, useState } from 'react';

import { io } from 'socket.io-client';

export const MessagesContext = createContext({});

const socket = io('ws://localhost:3333');

export function MessageContextProvider({ children }) {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('message', (data) => {
            setMessages(oldMessages => [ ...oldMessages, { ...data, id: Math.random() }]);
        });
    }, [])

    
    function sendMessage(message) {
        const name = localStorage.getItem('username') || 'unknown';

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