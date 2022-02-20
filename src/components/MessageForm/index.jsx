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

    if(input.trim().length <= 0 || input.trim().length > 150) return alert('Mensagem deve ter menos que 150 caracteres')

    sendMessage(input);
    setInput('');
  }


    return (
      <form id="message" onSubmit={handleFormSubmit} >
        <input type="text" placeholder="Mensagem" onChange={handleInput} value={input} />
        <IoSend />
      </form>
      )
  }
  
export default MessageForm
  