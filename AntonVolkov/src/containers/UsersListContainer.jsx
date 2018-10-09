import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UsersList from 'components/UsersList';
import LoadMore from 'components/LoadMore';
import modelUsers from 'models/Users';
import { loadUsers, loadUsersBuIds } from 'actions/actionsUsers';


class UsersListContainer extends PureComponent {

  static propTypes = {
    limit: PropTypes.number,
    userIds: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  }

  static defaultProps = {
    limit: 2,
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = (currentPage = 1) => {
    const { limit, userIds, getUsersByIds, getUsers } = this.props;
    if (userIds) {
      getUsersByIds(limit, currentPage, userIds);
    } else {
      getUsers(limit, currentPage);
    }
  }

  loadMore = (nextPage) => { this.loadUsers(nextPage)}

  render() {
    const { users, isLoading, limit, count, currentPage } = this.props;

    return (
      <Fragment>
        <UsersList limit={limit} users={users} />
        { isLoading && 'Loading...' }
        {limit && count && count > limit && currentPage < Math.ceil(count / limit) ? <LoadMore currentPage={currentPage} onIncrement={this.loadMore} />: ''}
      </Fragment>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    ...state.users,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getUsers: (limit, page) => dispatch(loadUsers(limit, page)),
    getUsersByIds: (limit, page, ids ) => dispatch(loadUsersByIds(limit, page, ids)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
  