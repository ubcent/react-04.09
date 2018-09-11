import './Header.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Header extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'big']),
    creators: PropTypes.arrayOf(PropTypes.string), 
  };

  static defaultProps = {
    size: 'small',
    creators: [],
  };

  render() {
    const { size, children, creators } = this.props;
    const headerClasses = classNames('header', {
      'header-small': size === 'small',
      'header-big': size === 'big',
    });

    return (
      <header className={headerClasses}>
        Hello from header {size}
        <div>
          Hi! I'm children - {children}
        </div>
        <ul>
          {creators.map((creator, idx) => <li key={idx}>{creator}</li>)}
        </ul>
      </header>
    );
  }
}