import {createStore, compose} from 'redux';
import rootReducer from './reducers/index';

const isDev = process.env.NODE_ENV !== 'production';
const composeSetup = isDev &&
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;


const defaultState = {
  form: '',
  messages: []
};

let store;

if (isDev){
  store = createStore(rootReducer, defaultState, composeSetup());
}
else{
  store = createStore(rootReducer, defaultState);
}

export default store;
