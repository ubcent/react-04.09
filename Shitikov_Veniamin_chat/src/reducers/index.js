import { combineReducers } from 'redux';

import messagesReducer from './messages';
import loginReducer from './login';


export default combineReducers({
    messages: messagesReducer,
    login: loginReducer,
})