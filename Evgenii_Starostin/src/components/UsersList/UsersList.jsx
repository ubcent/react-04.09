import './UsersList.css';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { IUser } from 'Models';

function UsersList(props) {
  const { users } = props;

  return (
    <ul className="list-group">
      {users.map(user => (
        <li key={user.id} className="list-group-item">
          <Link to={`/users/${user.id}`} className="userlist__user">
            <span className="glyphicon glyphicon-user" aria-hidden="true" />
            {' '}
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(IUser),
};

UsersList.defaultProps = {
  users: [],
};

export default UsersList;
