import './HorizontalMenu.scss';

import React, { Component } from 'react';
import { Nav } from 'reactstrap';
// Работа с классами
import classNames from 'classnames';
// Проверка свойств
import PropTypes from 'prop-types';

import MenuItem from 'components/MenuItem';

/**
 * Класс HorizontalMenu - компонент, отображающий горизонтальное меню
 * TODO добавить выделение активного пункта меню
 */
export default class HorizontalMenu extends Component {
  // Проверка свойств
  static propTypes = {
    // Пункты меню - массив объектов
    menu: PropTypes.arrayOf(PropTypes.shape({
      // id пункта
      id:  PropTypes.string,
      // название пункта
      name: PropTypes.string
    }))
  };

  // значения атрибутов по умолчанию
  static defaultProps = {
    // аттрибут menu инициализируем массивом из одного объекта с пустыми полями
    menu: [{id: '', name: ''}]
  };

  render() {
    // получаем переданные свойства меню
    const { menu } = this.props;
    return (
      <Nav>
        {menu.map( (item, idx) => {
          return (
            <MenuItem item={item} key={idx}></MenuItem>
          );
        })}
      </Nav>
    );
  }
}