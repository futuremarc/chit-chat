import React from 'react'
import sticker from '../images/sticker_1.jpg'


class Log extends React.Component {

  constructor(props){
  	super(props)
    this.renderBubbles = this.renderBubbles.bind(this)
  }

  componentDidMount() {
    let chatLog = this.refs.chatLog
    chatLog.scrollTop = chatLog.scrollHeight
  }

  //
  // {
  //   type: 'text',
  //   content: e.chatInput,
  //   timestamp: window.performance.now(),
  //   direction: 'outgoing',
  //   user: {
  //     name: 'marc'
  //   }
  // }

  componentDidUpdate() {
    let chatLog = this.refs.chatLog
    chatLog.scrollTop = chatLog.scrollHeight
  }
  renderBubbles() {
    const {messages} = this.props

    return messages.map((message, index) => {
      if (message.type === 'text') {
        return (
          <li>
            <div className={`${message.direction}-${message.type} message`}>{message.content}</div>
          </li>
        )
      } else {
        return (
          <li>
            <div className={`${message.direction}-${message.type} message`}>
              <img className={message.type} src={`${message.content}`}/>
            </div>
          </li>
        )
      }
    })
  }


  render() {
    return (
      <ul ref="chatLog" className="chat-log">
        {this.renderBubbles()}
      </ul>
    )
  }
}

export default Log
