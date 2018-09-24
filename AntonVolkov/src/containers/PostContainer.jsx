import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import Post from 'components/Post';

import modelPosts from 'models/Posts';

export default class PostContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      loading: false,
    };
  }
  
  static propTypes = {
    postId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  componentDidMount() {
    const { postId } = this.props;
    this.setState({ loading: true });
    modelPosts.getPost(postId)
      .then((post) => {
        this.setState((prevState) => ({
          loading: false,
          post,
        }));
      });
  }

  render() {
    const { post, loading } = this.state;
    return (
      <Fragment>
        <Post post={post} />
        { loading && 'Loading...' }
      </Fragment>
    );
  }
}
  