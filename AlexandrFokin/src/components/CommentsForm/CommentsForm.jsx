import './CommentsForm.scss';

import React, {PureComponent} from 'react';
// Проверка свойств
import PropTypes from 'prop-types';

export default class CommentsForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // значение поля Автор по умолчанию
      author: '',
      // значение поля Комментарий по умолчанию
      message: '',
    };
  }

  // Проверка свойств
  static propTypes = {
    // свойство должно быть функцией
    onSend: PropTypes.func,
  };

  // обработка нажатий на клавиши
  handleChange = event => {
    this.setState({
      // подставляем переменную в ключ объекта
      [event.target.name]: event.target.value,
    });
  };

  // обработка щелчков по кнопке
  handleClick = () => {
    // получаем значение
    const {onSend} = this.props;

    onSend(this.state);
  };

  render() {
    // получаем содержимое state
    const { author, message } = this.state;
    return (
      <div>
        <input type="text" name="author" onChange={this.handleChange} value={author}/>
        <p/>
        <textarea name="message" onChange={this.handleChange} value={message}/>
        <button onClick={this.handleClick}>Send</button>
      </div>
    );
  }
}