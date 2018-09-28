import {combineReducers} from 'redux';
import messagesReducer from './messages';

/**
 * Корневой reducer, управляющий всеми reducers
 */
export default combineReducers({
  // устанавливаем reducer, управляющий хранением сообщений messages
  // messages - наименование обрабатываемого action
  messages: messagesReducer,
});