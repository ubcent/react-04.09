import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Errors from 'Components/Errors';
import Loading from 'Components/Loading';
import PostsList from 'Components/PostsList';
import { fetchPostsList } from 'Actions/postsActions';
import { IPost, IError } from 'Models';

class PostsListContainer extends PureComponent {
  static propTypes = {
    postsList: PropTypes.arrayOf(IPost),
    fetching: PropTypes.bool,
    errors: PropTypes.arrayOf(IError),
    getPostsList: PropTypes.func,
  };

  static defaultProps = {
    postsList: [],
    fetching: false,
    errors: [],
    getPostsList: null,
  };

  componentDidMount = () => {
    const { getPostsList } = this.props;
    getPostsList();
  }

  render() {
    const { postsList, fetching, errors } = this.props;

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

        <PostsList posts={postsList} />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    postsList: state.posts.postsList,
    fetching: state.posts.fetching,
    errors: state.posts.errors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPostsList: () => fetchPostsList(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer);
