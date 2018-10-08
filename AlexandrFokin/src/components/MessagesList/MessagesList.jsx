import './MessagesList.scss';

import React, { PureComponent } from 'react';
// Проверка свойств
import PropTypes from 'prop-types';

/**
 * Класс MessagesList - компонент, отображающий комментарии на странице
 */
export default class MessagesList extends PureComponent {
  // Проверка свойств
  static propTypes = {
    // Комментарии - массив объектов
    messages: PropTypes.arrayOf(PropTypes.shape({
      // автор
      author: PropTypes.string,
      // сообщение
      text: PropTypes.string,
    })),
  };

  render() {
    const {messages} = this.props;

    return (
      <ul>
        {messages.map((message, idx) => <li key={idx}>{message.author}: {message.text}</li>)}
      </ul>
    );
  }
}