import React, { PureComponent, Fragment } from 'react';

import Errors from 'Components/Errors';
import Loading from 'Components/Loading';
import PostsList from 'Components/PostsList';
import Post from 'Components/Post';

export default class PostsContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      posts: [], fetching: false, errors: [], clickedPost: null,
    };
  }

  componentDidMount = () => {
    this.setState({ fetching: true, errors: [] });

    fetch('api/posts?_expand=user')
      .then(response => response.json())
      .then(posts => this.setState({ posts, fetching: false }))
      .catch(error => this.setState(({ errors }) => (
        { errors: errors.concat(error), fetching: false }
      )));
  }

  handleShowPostClick = (e) => {
    e.preventDefault();
    const id = +e.target.dataset.id;
    const { posts } = this.state;
    const clickedPost = posts.find(post => post.id === id);
    this.setState({ clickedPost });
  }

  handleGoBackClick = (e) => {
    e.preventDefault();
    this.setState({ clickedPost: null });
  }

  render() {
    const {
      posts, fetching, errors, clickedPost,
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

        {clickedPost ? (
          <Post post={clickedPost} handleClick={this.handleGoBackClick} />
        ) : (
          <PostsList posts={posts} handleClick={this.handleShowPostClick} />
        )}
      </Fragment>
    );
  }
}
