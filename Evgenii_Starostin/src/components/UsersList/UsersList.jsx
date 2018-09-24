import './UsersList.css';

import React from 'react';
import PropTypes from 'prop-types';

function UsersList(props) {
  const { users, handleClick } = props;

  return (
    <ul className="list-group">
      {users.map(user => (
        <li key={user.id} className="list-group-item">
          <a href="#" className="userlist__user" data-id={user.id} onClick={handleClick}>
            <span className="glyphicon glyphicon-user" aria-hidden="true" />
            {' '}
            {user.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  handleClick: PropTypes.func,
};

UsersList.defaultProps = {
  users: [],
  handleClick: null,
};

export default UsersList;
