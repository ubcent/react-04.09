import './Menu.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Menu extends Component {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
      id: PropTypes.string,
      isActive: PropTypes.bool,
    })),
  };
  
  static defaultProps = {
    links: [],
  };
  
  render() {
    const {links} = this.props;
    return (
      <div className="blog-masthead">
        <div className="container">
          <nav className="blog-nav">
            {links.map((link) => {
                const linkClassName = link.isActive ? 'blog-nav-item active' : 'blog-nav-item';
                return <a className={linkClassName} href={link.url} title={link.title} key={link.id}>{link.title}</a>
              }
            )}
          </nav>
        </div>
      </div>
    );
  }
}