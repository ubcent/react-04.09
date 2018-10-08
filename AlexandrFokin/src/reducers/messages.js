import {handleActions} from 'redux-actions';
// Action, отправляющий полученное сообщение в store
import {messageReceived} from 'actions/messages';
// Значение состояния по умолчанию
const initialStore = {
  // массив для хранения объектов сообщений
  entities: [],
};

/**
 * Reducer для хранения сообщений путем изменения значения entities в store
 * @return {object} новый store или текущий store, если action не определен
 */
export default handleActions({
  /**
   * Устанавливает соответствие между action и обработчиком
   * messageReceived - наименование обрабатываемого action
   * (store, action) - чистая функция-обработчик
   * @param store текущее состояние до прихода сообщения
   * @param action объект (действие), содержащий параметры
   * @return {{entities: T[]}}
   */
  [messageReceived]: (store, action) => {
    return {
      // текущее значение состояния
      ...store,
      // добавляем новое сообщение в массив сообщений
      // payload - хранит параметр, указанный при вызове action, т.е. message (сообщение)
      entities: store.entities.concat([action.payload]),
    };
  },
}, initialStore);