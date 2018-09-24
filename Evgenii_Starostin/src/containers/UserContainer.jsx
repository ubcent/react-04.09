import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import Errors from 'Components/Errors';
import Loading from 'Components/Loading';
import User from 'Components/User';

export default class UsersListContainer extends PureComponent {
  static propTypes = {
    match: PropTypes.arrayOf(PropTypes.shape({
      params: PropTypes.shape({
        userId: PropTypes.string,
      }),
    })),
  };

  static defaultProps = {
    match: {
      params: { userId: '' },
    },
  };

  constructor(props) {
    super(props);

    this.state = { user: null, fetching: true, errors: [] };
  }

  componentDidMount = () => {
    const { match } = this.props;
    fetch(`api/users/${match.params.userId}?_embed=posts&_embed=comments`)
      .then(response => response.json())
      .then(user => this.setState({ user, fetching: false }))
      .catch(error => this.setState(({ errors }) => (
        { errors: errors.concat(error), fetching: false }
      )));
  }

  render() {
    const {
      user, fetching, errors,
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

        <User user={user} />
      </Fragment>
    );
  }
}
