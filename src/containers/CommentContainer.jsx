import React, { PureComponent, Fragment } from 'react';

import Comment from 'components/Comment';

export default class CommentContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      comment: {},
      loading: false,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/comments/${match.params.id}`)
      .then((response) => response.json())
      .then((comment) => {
        this.setState((prevState) => ({
          loading: false,
          comment,
        }));
      });
  }

  render() {
    const { comment, loading } = this.state;

    return (
      <Fragment>
        <Comment comment={comment} />
        {loading && 'Loading...'}
      </Fragment>
    )
  }
}