import './Header.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Header extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'big']),
    menus: PropTypes.arrayOf(PropTypes.string), 
  };

  static defaultProps = {
    size: 'small',
    menus: [],
  };

  render() {
    const { size, menus } = this.props;
    const headerClasses = classNames('header', {
      'header-small': size === 'small',
      'header-big': size === 'big',
    });

    return (
      <header className={headerClasses}>
        <ul>
          {menus.map((menu, idx) => <li key={idx}><a href="#">{menu}</a></li>)}
        </ul>
      </header>
    );
  }
}