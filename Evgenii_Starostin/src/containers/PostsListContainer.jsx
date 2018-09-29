import React, { PureComponent, Fragment } from 'react';

import Errors from 'Components/Errors';
import Loading from 'Components/Loading';
import PostsList from 'Components/PostsList';

export default class PostsListContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { posts: [], fetching: false, errors: [] };
  }

  componentDidMount = () => {
    this.setState({ fetching: true, errors: [] });

    fetch('api/posts')
      .then(response => response.json())
      .then(posts => this.setState({ posts, fetching: false }))
      .catch(error => this.setState(({ errors }) => (
        { errors: errors.concat(error), fetching: false }
      )));
  }

  render() {
    const { posts, fetching, errors } = this.state;

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

        <PostsList posts={posts} />
      </Fragment>
    );
  }
}
