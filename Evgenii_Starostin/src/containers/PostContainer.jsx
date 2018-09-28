import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Errors from 'Components/Errors';
import Loading from 'Components/Loading';
import Post from 'Components/Post';
import { fetchPost } from 'Actions/postsActions';
import { IPost, IError } from 'Models';

class PostContainer extends PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        postId: PropTypes.string,
      }),
    }),
    post: IPost,
    fetching: PropTypes.bool,
    errors: PropTypes.arrayOf(IError),
    getPost: PropTypes.func,
  };

  static defaultProps = {
    match: {
      params: { postId: '' },
    },
    post: null,
    fetching: false,
    errors: [],
    getPost: null,
  };

  componentDidMount = () => {
    const { match, getPost } = this.props;
    getPost(match.params.postId);
  }

  render() {
    const { post, fetching, errors } = this.props;

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

        {post && <Post post={post} />}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post,
    fetching: state.posts.fetching,
    errors: state.posts.errors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: fetchPost(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
