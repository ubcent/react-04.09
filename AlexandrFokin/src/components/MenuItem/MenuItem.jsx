import './MenuItem.scss';

import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';
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
    })
  };

  // значения атрибутов по умолчанию
  static defaultProps = {
    // аттрибут menu инициализируем объектом с пустыми полями
    item: {}
  };

  render() {
    {/* получаем переданные свойства пункта меню */}
    const {id, name} = this.props.item;
    return (
      <NavItem>
        {/* Присваиваем пункту меню id */}
        <NavLink id={id} href='#'>
          {/* Отображаем название пункта меню */}
          {name}
        </NavLink>
      </NavItem>
    );
  }
}