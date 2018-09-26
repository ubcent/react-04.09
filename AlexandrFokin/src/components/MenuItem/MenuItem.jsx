import './MenuItem.scss';

import React, {Fragment, Component} from 'react';
import {NavLink} from 'react-router-dom';
// Проверка свойств
import PropTypes from 'prop-types';

/**
 * Класс MenuItem - компонент, отображающий пункт меню
 */
export default class MenuItem extends Component {
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
    }),
    // класс для компонента
    className: PropTypes.string,
  };

  // значения атрибутов по умолчанию
  static defaultProps = {
    // аттрибут menu инициализируем пустым объектом
    item: {},
    // имя класса отсутствует
    className: '',
  };

  // обновляем визуализацию компонента
  shouldComponentUpdate(nextProps) {
    return nextProps.className === this.props.className;
  }

  render() {
    // получаем переданные свойства пункта меню
    const {id, name, to} = this.props.item;
    // проверка пути в строке браузера при выделении пункта меню
    const checkLocation = path => location.pathname === path;

    return (
      <Fragment>
        {/* Присваиваем пункту меню id и адрес перехода, активному пункту меню присваивается класс active */}
        <NavLink exact
                 to={to}
                 id={id}
                 isActive={() => checkLocation(to)}>
          {/* Отображаем название пункта меню */}
          {name}
        </NavLink>
      </Fragment>
    );
  }
}