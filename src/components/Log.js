import React from 'react'
import song from '../song.json'
import {sendMessage} from '../actions/index'
import store from '../store'


class Log extends React.Component {

  constructor(props){
  	super(props)
    this.renderBubbles = this.renderBubbles.bind(this)
    this.convertTimeToMs = this.convertTimeToMs.bind(this)
  }

  componentWillMount() {
    song.messages.map((message, index) => {
      setTimeout(() => {
        store.dispatch(sendMessage(message))
      },this.convertTimeToMs(message.timestamp))
    })
  }

  convertTimeToMs( time ) {
    const timeParts = time.split(':')
    const msHours = parseInt(timeParts[0]) * 60 * 60 * 1000
    const msMins = parseInt(timeParts[1]) * 60 * 1000
    const msSecs = parseInt(timeParts[2]) * 1000
    const ms = msHours + msMins + msSecs
    return ms
  }

  componentDidMount() {
    this.chatLog.scrollTop = this.chatLog.scrollHeight
  }

  componentDidUpdate() {
    this.chatLog.scrollTop = this.chatLog.scrollHeight
  }
  renderBubbles() {
    const {messages} = this.props

    return messages.map((message, index) => {
      if (message.type === 'text') {
        return (
          <li key={index}>
            <div className={`${message.direction}-${message.type} message`}>{message.content}</div>
          </li>
        )
      } else {
        return (
          <li key={index}>
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
      <ul ref={el => this.chatLog = el} className="chat-log">
        {this.renderBubbles()}
      </ul>
    )
  }
}

export default Log
