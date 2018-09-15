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
    item: {}
  };

  render() {
    {/* получаем переданные свойства кнопки */}
    const {id, name} = this.props.item;
    return (
      <Button outline color='primary' id={id}>
        {name}
      </Button>
    );
  }
}