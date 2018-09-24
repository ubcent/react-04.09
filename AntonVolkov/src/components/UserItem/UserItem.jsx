import './UserItem.css';
    
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
          <li>Posts: {user.posts.length}</li>
          <li>Comments: {user.comments.length}</li>
        </ul>
      </div>
    );
  }
}
    