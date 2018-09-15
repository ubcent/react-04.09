import './Header.scss';

import React, {Component, Fragment} from 'react';
// Работа с классами
import classNames from 'classnames';

import HorizontalMenu from 'components/HorizontalMenu';
import BlogButton from 'components/BlogButton/BlogButton';

// Список пунктов меню
// TODO передать из json
const menu = [
  {
    id: 'main',
    name: 'Home'
  },
  {
    id: 'new_feature,',
    name: 'New features'
  },
  {
    id: 'press',
    name: 'Press'
  },
  {
    id: 'new_hires',
    name: 'New hires'
  },
  {
    id: 'about',
    name: 'About'
  }
];

// Данные для кнопки логина
const loginButton = {id: 'login', name: 'Log in'};

/**
 * Класс Header - компонент, отображающий хидер страницы
 */
export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <div className='row'>
            <div className='col-10'>
              {/* Меню навигации */}
              <HorizontalMenu menu={menu}>
              </HorizontalMenu>
            </div>
            <div className='col-2'>
              <BlogButton item={loginButton}>
              </BlogButton>
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}