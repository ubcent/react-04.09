import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import UsersList from 'components/UsersList';
import modelUsers from 'models/Users';

export default class UsersListContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
    };
  }
  
  static propTypes = {
    limit: PropTypes.number,
    userIds: PropTypes.arrayOf(PropTypes.number),
  }

  static defaultProps = {
    limit: 12,
  };

  componentDidMount() {
    this.setState({ loading: true });
    const { userIds } = this.props;
    if (userIds) {
      modelUsers.getUsersById(userIds)
        .then((users) => {
          this.setState((prevState) => ({
            loading: false,
            users,
          }));
        });
    } else {
      modelUsers.getUsers()
        .then((users) => {
          this.setState((prevState) => ({
            loading: false,
            users,
          }));
        });
    }

  }

  render() {
    const { users, loading} = this.state;
    const { limit } = this.props;

    return (
      <Fragment>
        <UsersList limit={limit} users={users} />
        { loading && 'Loading...' }
      </Fragment>
    );
  }
}
  