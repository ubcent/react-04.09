import './Sidebar.scss';

import React, {Component} from 'react';
import Parser from 'html-react-parser';
import PropTypes from 'prop-types';

export default class Sidebar extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      body: PropTypes.string,
      isInSet: PropTypes.bool,
    })),
  };
  
  static defaultProps = {
    items: [],
  };
  
  render() {
    const {items} = this.props;
    return (
      <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
        {items.map((item) => {
            const sideBarClass = item.isInSet ? 'sidebar-module sidebar-module-inset' : 'sidebar-module';
            return (
              <div className={sideBarClass} key={item.id}>
                <h4>{item.title}</h4>
                {Parser(item.body)}
              </div>
            )
          }
        )}
      </div>
    );
  }
}
