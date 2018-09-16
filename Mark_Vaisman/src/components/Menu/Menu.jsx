import './Menu.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Menu extends Component {

  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
      id: PropTypes.string
    })),
  };

  static defaultProps = {
    links: [],
  };

  render() {
    const {links} = this.props;
    return (
        <nav className="menu">
          <ul>
            {links.map((link) => <li key={link.id}><a href={link.url} title={link.title}>{link.title}</a></li>)}
          </ul>
        </nav>
    );
  }

}
