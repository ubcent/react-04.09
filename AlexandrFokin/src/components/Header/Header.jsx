import './Header.scss';

import React, {Component} from 'react';
// Проверка свойств
import PropTypes from 'prop-types';

import HorizontalMenu from 'components/HorizontalMenu';
import BlogButton from 'components/BlogButton/BlogButton';

// Список пунктов меню
// TODO передать из json
const menu = [
  {
    id: 'main',
    name: 'Home',
    to: '/',
  },
  {
    id: 'new_feature,',
    name: 'Blog',
    to: '/blog',
  },
  {
    id: 'press',
    name: 'Comments',
    to: '/comments',
  },
  {
    id: 'new_hires',
    name: 'Users',
    to: '/users',
  },
  {
    id: 'about',
    name: 'About',
    to: '/about',
  }
];

// Данные для кнопки логина
const loginButton = {id: 'login', name: 'Log in'};

/**
 * Класс Header - компонент, отображающий хидер страницы
 */
export default class Header extends Component {
  // Проверка свойств
  static propTypes = {
    // класс для компонента
    className: PropTypes.string,
  };

  // значения атрибутов по умолчанию
  static defaultProps = {
    // имя класса отсутствует
    className: '',
  };

  // обновляем визуализацию компонента
  shouldComponentUpdate(nextProps) {
    return nextProps.className === this.props.className;
  }

  render() {
    return (
        <header>
          <div className="container">
            <div className="row menu">
              <div className="col-10">
                {/* Меню навигации */}
                <HorizontalMenu menu={menu}/>
              </div>
              <div className="col-2">
                <BlogButton item={loginButton}/>
              </div>
            </div>
          </div>
        </header>
    );
  }
}