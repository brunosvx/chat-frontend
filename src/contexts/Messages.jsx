import { createContext, useEffect, useState } from 'react';

import { v4 as uuid } from 'uuid';

import { io } from 'socket.io-client';

export const MessagesContext = createContext({});

const socket = io(import.meta.env.VITE_WSURL || 'ws://localhost:3333');

export function MessageContextProvider({ children }) {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('message', (data) => {
            const myMessages = JSON.parse(localStorage.getItem('myMessages')) || [];

            if(myMessages.every((id) => id !== data.id)){
                return pushMessage(data);
            }

            pushMessage({ ...data, right: true, name: undefined })
        });

        socket.on('lastMessages', (data) => {
            const myMessages = JSON.parse(localStorage.getItem('myMessages')) || [];

            if(!myMessages.length) return setMessages(data);

            const lastMessages = data.map((message) => {
                if(myMessages.includes(message.id)){
                    return { ...message, right: true, name: undefined }
                }

                return message;
            });

            setMessages(lastMessages); 
        })
    }, [])

    function pushMessage(message) {
        setMessages(oldMessages => [ ...oldMessages, message ]);
    }

    
    function sendMessage(message) {
        const name = localStorage.getItem('username') || 'unknown';
        const myMessages = JSON.parse(localStorage.getItem('myMessages')) || [];
        myMessages.splice(0, myMessages.length - 100);

        const id = uuid();

        myMessages.push(id);
        localStorage.setItem('myMessages', JSON.stringify(myMessages));
        pushMessage({ id, text: message, right: true });
        socket.emit('message', { id, text: message, name })
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