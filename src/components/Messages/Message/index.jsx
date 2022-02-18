

function Message({ id, message, author, right }) {

    return (
      <div className={`message-box ${right ? 'right' : 'left'}`}>
          <span className="author">
            { author }
          </span>
          <p>
            { message }
          </p>
      </div>
      )
  }
  
export default Message
  