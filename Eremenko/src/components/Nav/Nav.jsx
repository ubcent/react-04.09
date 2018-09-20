import './Nav.css'

import React, { Component } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

//собственные модули

export default class Nav extends Component {
  
  render() {
    const { size, children } = this.props;
    const navClasses = ClassNames('nav', {
      'nav-small': size === 'small',
      'nav-big': size === 'big',
    });
    
    return (
      <nav className={navClasses}>
        {children}
      </nav>
    );
  }
}