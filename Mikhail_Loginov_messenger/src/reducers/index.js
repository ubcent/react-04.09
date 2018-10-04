import {combineReducers} from 'redux';

import messagesReducer from './messages';
import usersReducer from './users';
import dialogsReducer from './dialogs';

export default combineReducers({
    messages: messagesReducer,
    users: usersReducer,
    dialogs: dialogsReducer,
});
