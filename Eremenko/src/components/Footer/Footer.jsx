import './Footer.css'

import React, { Component } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

//собственные модули

export default class Footer extends Component {
  
  render() {
    const { size, children } = this.props;
    const footerClasses = ClassNames('footer', {
      'footer-small': size === 'small',
      'footer-big': size === 'big',
    });
    
    return (
      <footer className={footerClasses}>
        {children}
      </footer>
    );
  }
}