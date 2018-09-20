import './Pager.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Pager extends Component {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
      id: PropTypes.string,
    })),
  };
  
  static defaultProps = {
    links: [],
  };
  
  render() {
    const {links} = this.props;
    return (
      <nav>
        <ul className="pager">
          {links.map((link) =>  <li key={link.id}><a href={link.url}>{link.title}</a></li>)}
        </ul>
      </nav>
    );
  }
}
