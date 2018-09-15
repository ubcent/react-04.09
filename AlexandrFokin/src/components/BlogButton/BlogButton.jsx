import './BlogButton.scss';

import React, { Component } from 'react';
import { Button } from 'reactstrap';
// Проверка свойств
import PropTypes from 'prop-types';

/**
 * Класс BlogButton - компонент, отображающий кнопку на странице
 */
export default class BlogButton extends Component {
  // Проверка свойств
  static propTypes = {
    // Кнопка - объект
    item: PropTypes.shape({
      // id кнопки
      id:  PropTypes.string,
      // название кнопки
      name: PropTypes.string
    })
  };

  // значения атрибутов по умолчанию
  static defaultProps = {
    // аттрибут item инициализируем объектом с пустыми полями
    item: {id: '', name: ''}
  };

  render() {
    return (
      <Button outline color="primary" id={this.props.item.id}>
        {this.props.item.name}
      </Button>
    );
  }
}