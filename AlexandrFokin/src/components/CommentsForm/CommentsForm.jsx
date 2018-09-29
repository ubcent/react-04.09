import './CommentsForm.scss';

import React, {PureComponent} from 'react';
// Проверка свойств
import PropTypes from 'prop-types';

/**
 * Класс CommentsForm - компонент, отображающий поле ввода комментария на странице
 */
export default class CommentsForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // значение поля Автор по умолчанию
      name: '',
      // значение поля Комментарий по умолчанию
      body: '',
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
    const { name, body } = this.state;
    return (
      <div>
        <input type="text" name="name" onChange={this.handleChange} value={name}/>
        <p/>
        <textarea name="body" onChange={this.handleChange} value={body}/>
        <p/>
        <button onClick={this.handleClick}>Send</button>
      </div>
    );
  }
}