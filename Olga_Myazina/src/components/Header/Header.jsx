import './Header.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Menu from 'components/Menu';
import Login from 'components/Login';

const menuItems = ['Главная', 'О нас'];

export default class Header extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'big'])
  };
  static defaultProps = {
    size: 'small'
  };
  render() {
    const { size } = this.props;

    const headerClasses = classNames('header', {
      'header-small': size === 'small',
      'header-big': size === 'big'
    });
    return (
      <header className={headerClasses}>
        <div className="menuContainer">
          <Menu menuItems={menuItems} />
        </div>
        <div className="loginContainer">
          <Login />
        </div>
      </header>
    );
  }
}
