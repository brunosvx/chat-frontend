import { useContext, useEffect, useRef } from 'react';

import { MessagesContext } from '../../contexts/Messages';

import Message from './Message';

function Messages() {

    const { messages } = useContext(MessagesContext);

    const messagesSectionRef = useRef(null);

    useEffect(() => {
      console.log(messagesSectionRef);
      messagesSectionRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    return (
      <section className="messages" ref={messagesSectionRef} >
          { messages.map(props => <Message {...props} key={props.id} />) }
      </section>
      )
  }
  
export default Messages
  