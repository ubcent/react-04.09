import './UsersList.css';
    
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import UserItem from 'components/UserItem';

export default class UsersList extends PureComponent {

  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
    limit: PropTypes.number,
  };

  static defaultProps = {
    users: [],
    limit: 5,
  };
      
  render() {
    const { users } = this.props;

    return (
      <div className="users-list">
        {users.map( user => <UserItem key={user.id} user={user} />)}
      </div>
    );
  }
}
    