import React, { PureComponent, Fragment } from 'react';

import Errors from 'Components/Errors';
import Loading from 'Components/Loading';
import UsersList from 'Components/UsersList';
import User from 'Components/User';

export default class UsersContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      users: [], clickedUser: null, fetching: false, errors: [],
    };
  }

  componentDidMount = () => {
    this.setState({ fetching: true, errors: [] });

    fetch('api/users?_embed=posts&_embed=comments')
      .then(response => response.json())
      .then(users => this.setState({ users, fetching: false }))
      .catch(error => this.setState(({ errors }) => (
        { errors: errors.concat(error), fetching: false }
      )));
  }

  handleShowUserClick = (e) => {
    e.preventDefault();

    const id = +e.target.dataset.id;
    const { users } = this.state;
    const clickedUser = users.find(user => user.id === id);
    this.setState({ clickedUser });
  }

  handleGoBackClick = (e) => {
    e.preventDefault();

    this.setState({ clickedUser: null });
  }

  render() {
    const {
      users, clickedUser, fetching, errors,
    } = this.state;

    if (fetching) {
      return (
        <Loading />
      );
    }

    return (
      <Fragment>
        {errors.length > 0 && (
          <Errors errors={errors} />
        )}

        {clickedUser ? (
          <User user={clickedUser} handleClick={this.handleGoBackClick} />
        ) : (
          <UsersList users={users} handleClick={this.handleShowUserClick} />
        )}
      </Fragment>
    );
  }
}
