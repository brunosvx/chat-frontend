

function Message({ id, text, name, right }) {

    return (
      <div className={`message-box ${right ? 'right' : 'left'}`}>
          <span className="author">
            { name }
          </span>
          <p>
            { text }
          </p>
      </div>
      )
  }
  
export default Message
  