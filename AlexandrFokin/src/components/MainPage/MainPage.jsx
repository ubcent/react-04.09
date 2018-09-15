import './MainPage.scss';

import React, { Component } from 'react';
// Работа с классами
import classNames from 'classnames';
// Проверка свойств
import PropTypes from 'prop-types';

/**
 * Класс компонент MainPage
 */
export default class MainPage extends Component {
  // Проверка свойств
  static propTypes = {
    // Список возможных значений атрибута size
    size: PropTypes.oneOf(['small', 'big'])
  };

  // значения атрибутов по умолчанию
  static defaultProps = {
    // аттрибут size
    size: 'small'
  };

  render() {
    // получаем текущие значения атрибутов этого элемента и значение потомка внутри этого элемента
    const { size, children } = this.props;
    // присваиваем элементу класс main
    const mainClasses = classNames('main', {
      // присваиваем элементу дополнительный класс в зависимости от значения аттрибута size этого элемента
      'main-small': size === 'small',
      'main-big': size === 'big'
    });

    // Отображаем main и его измененного потомка
    return (
      <main className={mainClasses}>
        This is MainPage with size {size}
        <div>
          Hi! I'm children - {children}
        </div>
      </main>
    );
  }
}