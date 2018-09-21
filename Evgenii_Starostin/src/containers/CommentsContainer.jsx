import React, { PureComponent, Fragment } from 'react';

import Errors from 'Components/Errors';
import Loading from 'Components/Loading';
import CommentsList from 'Components/CommentsList';

export default class CommentsContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { comments: [], fetching: false, errors: [] };
  }

  componentDidMount = () => {
    this.setState({ fetching: true, errors: [] });

    fetch('api/comments?_expand=post')
      .then(response => response.json())
      .then(comments => this.setState({ comments, fetching: false }))
      .catch(error => this.setState(({ errors }) => (
        { errors: errors.concat(error), fetching: false }
      )));
  }

  render() {
    const { comments, fetching, errors } = this.state;

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

        <CommentsList comments={comments} />
      </Fragment>
    );
  }
}
