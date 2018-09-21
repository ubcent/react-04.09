import React from 'react';
import PropTypes from 'prop-types';

function NavMenu(props) {
  const { handleClick, items, focused } = props;

  return (
    <nav className="nav">
      <ul className="nav nav-tabs">
        {items.map((item, index) => (
          <li className={(focused === index + 1) ? 'active' : ''} key={item.id}>
            <a href="#" data-id={item.id} onClick={handleClick}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

NavMenu.propTypes = {
  handleClick: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  focused: PropTypes.number,
};

NavMenu.defaultProps = {
  handleClick: null,
  items: [],
  focused: 0,
};

export default NavMenu;
