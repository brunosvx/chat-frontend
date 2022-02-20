import { IoSend } from 'react-icons/io5';

import { useState, useContext } from 'react';

import { MessagesContext } from '../../contexts/Messages';

function MessageForm() {

  const { sendMessage } = useContext(MessagesContext);

  const [input, setInput] = useState('');

  function handleInput({ target }) {
    setInput(target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    console.log('handle')

    sendMessage(input);
  }

    return (
      <form id="message" onSubmit={handleFormSubmit} >
        <input type="text" placeholder="Mensagem" onChange={handleInput} />
        <IoSend />
      </form>
      )
  }
  
export default MessageForm
  