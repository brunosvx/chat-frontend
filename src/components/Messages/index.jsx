import Message from './Message';

function Messages() {

    const fakeMessages = [
        { id: 0, message: 'Lorem Ipsun Dolor sit amet', author: 'Bruno Silveira Vicente', right: false},
        { id: 1, message: 'Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet', author: 'Bruno', right: true},
        { id: 2, message: 'Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet', author: 'Joao Silva', right: false},
        { id: 3, message: 'Lorem Ipsun', author: 'Maria kksd', right: false},
        { id: 4, message: 'Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet', author: 'Cuca Beludo', right: true},
        { id: 5, message: 'Lorem Ipsun Dolor sit amet', author: 'Bruno Silveira Vicente', right: false},
        { id: 6, message: 'Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet', author: 'Bruno', right: true},
        { id: 7, message: 'Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet', author: 'Joao Silva', right: false},
        { id: 8, message: 'Lorem Ipsun', author: 'Maria kksd', right: false},
        { id: 9, message: 'Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet Lorem Ipsun Dolor sit amet', author: 'Cuca Beludo', right: true},
    ]

    return (
      <section className="messages">
          { fakeMessages.map(props => <Message {...props} key={props.id} />) }
      </section>
      )
  }
  
export default Messages
  