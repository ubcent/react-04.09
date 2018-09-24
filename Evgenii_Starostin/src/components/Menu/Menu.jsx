import './Menu.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Menu extends Component {
  static propTypes = {
    handleClick: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })),
    focused: PropTypes.number
  }

  static defaultProps = {
    items: [],
    focused: 0
  }

  render() {
    const { handleClick, items, focused } = this.props;
    return (
      <nav className="nav">
        <div className="container">
          <ul className="nav-menu">
            {
              items.map((item, index) => {
                let style = 'nav-menu__item';
                if (focused === index) {
                  style = 'nav-menu__item focused';
                }
                return (
                  <li className={style} key={index}>
                    <a name={item.id} onClick={handleClick}>
                      {item.name}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    );
  }
}
