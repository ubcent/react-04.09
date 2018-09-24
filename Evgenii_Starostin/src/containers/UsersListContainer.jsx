import React, { PureComponent, Fragment } from 'react';

import Errors from 'Components/Errors';
import Loading from 'Components/Loading';
import UsersList from 'Components/UsersList';

export default class UsersListContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { users: [], fetching: false, errors: [] };
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

  render() {
    const { users, fetching, errors } = this.state;

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

        <UsersList users={users} />
      </Fragment>
    );
  }
}
