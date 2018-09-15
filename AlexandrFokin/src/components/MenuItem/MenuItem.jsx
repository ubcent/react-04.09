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
      name: PropTypes.string
    })
  };

  // значения атрибутов по умолчанию
  static defaultProps = {
    // аттрибут menu инициализируем объектом с пустыми полями
    item: {id: '', name: ''}
  };

  render() {
    return (
      <NavItem>
        <NavLink id={this.props.item.id} href="#">
          {this.props.item.name}
        </NavLink>
      </NavItem>
    );
  }
}