import './Menu.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Menu extends Component {
  static propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.string)
  };
  static defaultProps = {
    menuItems: []
  };
  render() {
    const { menuItems } = this.props;
    return (
      <div>
        <ul className="menu">
          {menuItems.map((menuItem, idx) => (
            <li key={idx} className="menu--item">
              <a href="#" className="menu--item--a">
                {menuItem}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
