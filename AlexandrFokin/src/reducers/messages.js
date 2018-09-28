import {handleActions} from 'redux-actions';
// Action, отправляющий полученное сообщение в store
import {messageReceived} from 'actions/messages';
// Значение состояния по умолчанию
const initialState = {
  // массив для хранения объектов сообщений
  entities: [],
};

/**
 * Reducer для хранения сообщений в store
 */
export default handleActions({
  // устанавливает соответствие между action и обработчиком
  // messageReceived - наименование обрабатываемого action
  // (state, action) - функция-обработчик
  // state - предыдущее состояние до прихода сообщения
  // action - объект действия, содержащий параметры
  [messageReceived]: (state, action) => {
    return {
      // старое значение состояния
      ...state,
      // добавляем новое сообщение в массив сообщений
      // payload - хранит параметр, указанный при вызове action, т.е. message (сообщение)
      entities: state.entities.concat([action.payload]),
    };
  }
}, initialState);