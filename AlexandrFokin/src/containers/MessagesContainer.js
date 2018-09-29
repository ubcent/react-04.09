import React, { PureComponent, Fragment } from 'react';
// Проверка свойств
import PropTypes from 'prop-types';

import MessagesForm from 'components/MessagesForm';
import MessagesList from 'components/MessagesList';

/**
 * Контейнер для работы с данными, связанными с отображением сообщений
 */
export default class MessagesContainer extends PureComponent {
  constructor(props) {
    super(props);

    // значения state по умолчанию
    this.state = {
      author: '',
      text: '',
    };
  }

  // Проверка свойств
  static propTypes = {
    // свойство должно быть функцией
    mountEvents: PropTypes.func,
    // свойство должно быть функцией
    sendMessage: PropTypes.func,
    // свойство должно быть массивом
    messages: PropTypes.arrayOf(PropTypes.shape({
      // автор
      author: PropTypes.string,
      // текст сообщения
      text: PropTypes.string,
    })),
  };

  componentDidMount() {
    // получаем mountEvents из свойств
    const { mountEvents } = this.props;
    // подключаемся к серверу для передачи сообщений
    mountEvents();
  }

  // обработка нажатий на клавиши
  handleChange = event => {
    this.setState({
      // подставляем переменную в ключ объекта
      [event.target.name]: event.target.value,
    });
  };

  // обработка нажатий на кнопку отправки сообщения
  handleSend = event => {
    // получаем функцию отправки из свойств
    const { sendMessage } = this.props;

    // отправляем сообщение
    sendMessage(this.state);
    event.preventDefault();
  };

  render() {
    // получаем сообщения из свойств
    const { messages } = this.props;
    const { author, text } = this.state;

    return (
      <Fragment>
        {/* выводим сообщения */}
        <MessagesList messages={messages}/>
        {/* форма для ввода комментария */}
        <MessagesForm
          author={author}
          text={text}
          onHandleChange={this.handleChange}
          onHandleSend={this.handleSend}/>
      </Fragment>
    );
  }
}