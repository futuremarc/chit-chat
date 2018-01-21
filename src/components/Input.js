import React from 'react';
import {reduxForm, Field, reset} from 'redux-form';
import {sendMessage} from '../actions/index';

class Input extends React.Component{

  constructor(props){
  	super(props)
    this.submit = this.submit.bind(this)
  }


  submit(e, dispatch){

    if (!e.chatInput || e.chatInput.trim().length < 1) return

    dispatch(sendMessage({
      "type": "text",
      "content": e.chatInput,
      "timestamp": window.performance.now(),
      "direction": "outgoing",
      "user": {
        "name": "marc"
      }
    }))

    dispatch(reset('chatInput'))

  }

  render(){
    const { handleSubmit } = this.props;
    return (
      <div className="chat-form-container">
        <form onSubmit={handleSubmit(this.submit)}>
          <Field ref={input => this.input = input} autoComplete="off" component="input" className="chat-input" placeholder="Say something..." name="chatInput" value="" />
          <button component="button" type="submit" className="chat-submit">
            <span className='glyphicon glyphicon-send'></span>
          </button>
        </form>
      </div>
    )
  }
}

Input = reduxForm({form:'chatInput'})(Input)
export default Input
