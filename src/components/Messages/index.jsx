import { useContext } from 'react';

import { MessagesContext } from '../../contexts/Messages';

import Message from './Message';

function Messages() {

    const { messages } = useContext(MessagesContext);

    return (
      <section className="messages">
          { messages.map(props => <Message {...props} key={props.id} />) }
      </section>
      )
  }
  
export default Messages
  