import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Errors from 'Components/Errors';
import Loading from 'Components/Loading';
import UsersList from 'Components/UsersList';
import {
  fetchUsersList, addUser, deleteUser, updateUser,
} from 'Actions/usersActions';
import { IUser, IError } from 'Models';

class UsersListContainer extends PureComponent {
  static propTypes = {
    usersList: PropTypes.arrayOf(IUser),
    fetching: PropTypes.bool,
    errors: PropTypes.arrayOf(IError),
    getUsersList: PropTypes.func,
    handleAddUser: PropTypes.func,
    handleDeleteUser: PropTypes.func,
    handleUpdateUser: PropTypes.func,
  };

  static defaultProps = {
    usersList: [],
    fetching: false,
    errors: [],
    getUsersList: null,
    handleAddUser: null,
    handleDeleteUser: null,
    handleUpdateUser: null,
  };

  componentDidMount = () => {
    const { getUsersList } = this.props;
    getUsersList();
  }

  render() {
    const {
      usersList, fetching, errors, handleAddUser, handleDeleteUser, handleUpdateUser,
    } = this.props;

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

        <UsersList
          users={usersList}
          addUser={handleAddUser}
          deleteUser={handleDeleteUser}
          updateUser={handleUpdateUser}
        />
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
    getUsersList: () => dispatch(fetchUsersList()),
    handleAddUser: userName => dispatch(addUser(userName)),
    handleDeleteUser: userId => dispatch(deleteUser(userId)),
    handleUpdateUser: (userId, userName) => dispatch(updateUser(userId, userName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
