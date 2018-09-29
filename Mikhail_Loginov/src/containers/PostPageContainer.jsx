import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';

import PostPage from 'components/PostPage';

class PostPageContainer extends PureComponent {
  static propTypes = {
    id: propTypes.string,
    blogPosts: propTypes.array,
    authors: propTypes.array,
    comments: propTypes.array,
  }

  getPostById(id) {
    let post = {};
    for (let blogPost of this.props.blogPosts) {
      if (blogPost.id === id) {
        post = blogPost;
        break;
      }
    }
    return post;
  }

  getCommentsByPostId(id) {
    let postComments = [];
    this.props.comments.forEach(comment => {
      if (comment.postID === id) {
        postComments.push(comment);
      }
    });
    return postComments;
  }

  render() {
    let post = this.getPostById(+this.props.id);
    let author = this.props.authors[post.authorID-1];
    let postComments = this.getCommentsByPostId(post.id);
      
    return (
      <PostPage post={post} author={author} postComments={postComments}/>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    blogPosts: state.blogPosts,
    authors: state.users,
    comments: state.comments
  }
}

export default connect(mapStateToProps)(PostPageContainer);
