import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Errors from 'Components/Errors';
import Loading from 'Components/Loading';
import UsersList from 'Components/UsersList';
import { fetchUsersList } from 'Actions/usersActions';
import { IUser, IError } from 'Models';

class UsersListContainer extends PureComponent {
  static propTypes = {
    usersList: PropTypes.arrayOf(IUser),
    fetching: PropTypes.bool,
    errors: PropTypes.arrayOf(IError),
    getUsersList: PropTypes.func,
  };

  static defaultProps = {
    usersList: [],
    fetching: false,
    errors: [],
    getUsersList: null,
  };

  componentDidMount = () => {
    const { getUsersList } = this.props;
    getUsersList();
  }

  render() {
    const { usersList, fetching, errors } = this.props;

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

        <UsersList users={usersList} />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    usersList: state.users.usersList,
    fetching: state.users.fetching,
    errors: state.users.errors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsersList: () => fetchUsersList(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
