import './MenuItem.scss';

import React, {Fragment, PureComponent} from 'react';
import {Link} from 'react-router-dom';
// Проверка свойств
import PropTypes from 'prop-types';

/**
 * Класс MenuItem - компонент, отображающий пункт меню
 */
export default class MenuItem extends PureComponent {
  // Проверка свойств
  static propTypes = {
    // Пункт меню - объект
    item: PropTypes.shape({
      // id пункта
      id:  PropTypes.string,
      // название пункта
      name: PropTypes.string,
      // адрес перехода по ссылке
      to: PropTypes.string,
    })
  };

  // значения атрибутов по умолчанию
  static defaultProps = {
    // аттрибут menu инициализируем пустым объектом
    item: {}
  };

  render() {
    // получаем переданные свойства пункта меню
    const {id, name, to} = this.props.item;
    return (
      <Fragment>
        {/* Присваиваем пункту меню id */}
        <Link to={to} id={id}>
          {/* Отображаем название пункта меню */}
          {name}
        </Link>
      </Fragment>
    );
  }
}