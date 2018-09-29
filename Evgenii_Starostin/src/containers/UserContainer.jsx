import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Errors from 'Components/Errors';
import Loading from 'Components/Loading';
import User from 'Components/User';
import { fetchUser } from 'Actions/usersActions';
import { IUser, IError } from 'Models';

class UserContainer extends PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        userId: PropTypes.string,
      }),
    }),
    user: IUser,
    fetching: PropTypes.bool,
    errors: PropTypes.arrayOf(IError),
    getUser: PropTypes.func,
  };

  static defaultProps = {
    match: {
      params: { userId: '' },
    },
    user: null,
    fetching: false,
    errors: [],
    getUser: null,
  };

  componentDidMount = () => {
    const { match, getUser } = this.props;
    getUser(match.params.userId);
  }

  render() {
    const {
      user, fetching, errors,
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

        {user && <User user={user} />}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.user,
    fetching: state.users.fetching,
    errors: state.users.errors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: userId => dispatch(fetchUser(userId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
