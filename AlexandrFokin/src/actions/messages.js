import {createAction} from 'redux-actions';
import io from 'socket.io-client';
// подключение к серверу
const socket = io.connect('http://localhost:3002');

/**
 * Action, отправляющий полученное сообщение в store
 * Указываем значение action.type:
 * Message - название сущности, для которой выполняется действие
 * Receive - название действия
 */
export const messageReceived = createAction('[Message] Receive');

/**
 * Обрабатывает событие отправки сообщения *
 * @return {Function}
 * dispatch диспетчер, содержащий сообщение
 * вместе с dispatch можно вторым параметром передать функцию getState, позволяющую получать
 * текущее содержимое state
 */
export const mountEvents = () => dispatch => {
  // обрабатываем событие отправки сообщения
  socket.on('message', message => {
    // вызываем экшн, чтобы отправить полученное сообщение в store
    dispatch(messageReceived(message));
  });
};

/**
 * Отправляет сообщение
 * @return {Function} отправляет сообщение на сервер с помощью сокета
 */
export const sendMessage = message => () => {
  socket.emit('message', message);
};