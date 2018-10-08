import './UserItem.css';
    
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { NavLink as Link } from 'react-router-dom';

export default class UserItem extends PureComponent {

  static propTypes = {
    user: PropTypes.object,
  };
      
  render() {
    const {user} = this.props;
    return (
      <div className="user-item">
        <h2>{user.name}</h2>
        <ul>
          <li>Posts:&nbsp;
            <Link to={`/users/${user.id}/posts`} className="user-item__link">
              {user.posts.length}
            </Link>
          </li>
          <li>Comments: {user.comments.length}</li>
        </ul>
      </div>
    );
  }
}
    