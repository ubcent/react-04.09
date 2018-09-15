import './BlogButton.scss';

import React, { Component } from 'react';
import { Button } from 'reactstrap';
// Проверка свойств
import PropTypes from 'prop-types';

/**
 * Класс компонент BlogButton отображает кнопку
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
    // аттрибут item устанавливаем объект с пустыми полями
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