import React from 'react';
import {reduxForm, Field, reset} from 'redux-form';
import {sendMessage} from '../actions/index';

class Input extends React.Component{

  constructor(props){
  	super(props)
    this.submit = this.submit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
  }


  submit(e, dispatch){

    if (e.chatInput.trim().length < 1) return

    dispatch(sendMessage({
      type: 'text',
      content: e.chatInput,
      timestamp: window.performance.now(),
      direction: 'outgoing',
      user: {
        name: 'marc'
      }
    }))

    dispatch(reset('chatInput'))

  }

  render(){
    const { handleSubmit } = this.props;
    return (
      <div className="chat-form-container">
        <form onSubmit={handleSubmit(this.submit)}>
          <Field ref={input => this.input = input} component="input" onChange={this.handleChange} className="chat-input" placeholder="Say something..." name="chatInput" value="" />
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



//
// [
//   {
//     type: 'message',
//     content: 'this is a message',
//     timestamp: '00:00:10',
//     outgoing: false,
//     user: {
//       name: 'lighten up!'
//     }
//   },
//   {
//     type: 'message',
//     content: 'this is another message!',
//     timestamp: '00:00:15',
//     outgoing: false,
//     user: {
//       name: 'lighten up!'
//     }
//   },
//   {
//     type: 'sticker',
//     content: 'https://url.com/sticker.jpg.',
//     timestamp: '00:01:20',
//     outgoing: false,
//     user: {
//       name: 'lighten up!'
//     }
//   }
// ]
