import {createAction} from 'redux-actions';
import io from 'socket.io-client';
// подключение к серверу
const socket = io.connect('http://localhost:3002');

/**
 * Action, отправляющий полученное сообщение в store
 * @type {string}
 * Message - название сущности
 * Receive - название действия
 */
export const messageReceived = createAction('[Message] Receive');

/**
 * Обрабатывает событие отправки сообщения
 * @param dispatch диспетчер, содержащий сообщение
 */
export const mountEvents = dispatch => {
  // обрабатываем событие отправки сообщения
  io.on('message', message => {
    // отправляем полученное сообщение в store
    dispatch(messageReceived(message));
  });
};

/**
 * Отправляет сообщение
 * @param dispatch диспетчер, содержащий сообщение
 * @return {Function} отправляет сообщение на сервер с помощью сокета
 */
export const sendMessage = dispatch => message => {
  socket.emit('message', message);
};