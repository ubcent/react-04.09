import './NavMenu.css';

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavMenu(props) {
  const { items } = props;

  return (
    <nav className="nav">
      <ul className="nav nav-tabs">
        {items.map((item, index) => (
          <li key={index}>
            <NavLink to={item.href} activeClassName="active" exact={item.exact}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

NavMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.string,
    exact: PropTypes.bool,
  })),
};

NavMenu.defaultProps = {
  items: [],
};

export default NavMenu;
