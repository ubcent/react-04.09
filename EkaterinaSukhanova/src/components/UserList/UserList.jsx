import './UserList.css';

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class UserList extends PureComponent {
    render() {
        const {users, onLoadMore, loading} = this.props;
        return (
            <div className="users">
                <p>All users:</p>
                <ul className="user-list">
                    {users.map((user) => <li key={user.id}>{user.name}</li>)}
                </ul>
                <button onClick={onLoadMore}>Load more</button>
                <p>{loading && 'Loading...'}</p>
            </div>
        )
    }
}