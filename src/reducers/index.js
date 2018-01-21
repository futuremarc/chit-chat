import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {SEND_MESSAGE} from '../constants';


const messages = (state = [], {type, payload}) => {
  switch (type){
    case SEND_MESSAGE:
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  messages,
  form
});

export default rootReducer;
