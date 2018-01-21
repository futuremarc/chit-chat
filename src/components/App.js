import React, { Component } from 'react';
import {connect} from 'react-redux';
import rootReducer from '../reducers/index';
import {bindActionCreators} from 'redux';
import logo from '../images/bryan.png';
import '../styles/App.css';
import Input from './Input';
import Log from './Log';

class App extends Component {

  constructor(){
    super()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"></h1>
        </header>
        <Log {...this.props}/>
        <Input/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    form: state.form,
    messages: state.messages
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
