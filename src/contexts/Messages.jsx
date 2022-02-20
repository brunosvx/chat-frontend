import { createContext, useEffect, useState } from 'react';

import { io } from 'socket.io-client';

export const MessagesContext = createContext({});

const socket = io('ws://brunosvx-chat.herokuapp.com');

export function MessageContextProvider({ children }) {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('message', (data) => {
            setMessages(oldMessages => [ ...oldMessages, { ...data, id: Math.random() }]);
        });
    }, [])

    
    function sendMessage(message) {
        const name = localStorage.getItem('username') || 'unknown';

        setMessages(oldMessages => [ ...oldMessages, { text: message, id: Math.random(), right: true }]);
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