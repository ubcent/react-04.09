import './Counter.scss';

import React, {Component, Fragment} from 'react';

/**
 * Класс Counter - компонент, отображающий счетчик на странице
 */
export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      num: 1,
    };
  }

  counterClick = event => {
    // получаем значение атрибута name щелкнутого элемента
    const operation = event.target.name === 'plus' ? 1 : -1;
    // получаем содержимое предыдущего значения state
    this.setState( prevState => {
      return {
        ...prevState,
        counter: prevState.counter + operation,
      };
    });
  };

  // обработка щелчков по кнопкам
  inputClick = event => {
    // получаем значение атрибута name щелкнутого элемента
    const operation = event.target.name === 'plus' ? 1 : -1;
    // получаем содержимое предыдущего значения state
    this.setState( prevState => {
      return {
        ...prevState,
        num: prevState.num + operation,
      };
    });
  };

  // обработка нажатий на клавиши
  handleChange = (event) => {
    this.setState({
      // подставляем переменную в ключ объекта
      [event.target.name]: parseInt(event.target.value),
    })
  };

  render() {
    // получаем содержимое state
    const { counter, num } = this.state;
    return (
      <Fragment>
        <div>
          <button name="minus" onClick={this.counterClick}>-</button>
          {counter}
          <button name="plus" onClick={this.counterClick}>+</button>
        </div>
        <div>
          <button name="minus" onClick={this.inputClick}>-</button>
          <input name="num" onChange={this.handleChange} type="text" value={num}/>
          <button name="plus" onClick={this.inputClick}>+</button>
        </div>
      </Fragment>
    );
  }
}