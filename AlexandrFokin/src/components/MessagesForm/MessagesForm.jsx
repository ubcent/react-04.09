import './MessagesForm.scss';

import React, { PureComponent } from 'react';
// Проверка свойств
import PropTypes from 'prop-types';

/**
 * Класс MessagesForm - компонент, отображающий форму ввода комментария на странице
 */
export default class MessagesForm extends PureComponent {
  // Проверка свойств
  static propTypes = {
    // Функция обработки нажатий на клавиши
    onHandleChange: PropTypes.func,
    // Функция обработки нажатий на кнопку отправки сообщения
    onHandleSend: PropTypes.func,
    // автор
    author: PropTypes.string,
    // сообщение
    text: PropTypes.string,
  };

  render() {
    const {onHandleChange, onHandleSend, author, text} = this.props;

    return (
      <form>
        <input placeholder="Author" onChange={onHandleChange} type="text" name="author" value={author} /><br />
        <textarea placeholder="Message" onChange={onHandleChange} name="text" value={text}/><br />
        <button onClick={onHandleSend}>Send</button>
      </form>
    );
  }
}