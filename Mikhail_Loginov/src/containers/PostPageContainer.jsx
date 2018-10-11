import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';

import PostPage from 'components/PostPage';
import {loadUsers} from 'actions/users';
import {loadComments, addComment} from 'actions/comments';
import {loadBlogPosts} from 'actions/blog-posts';

import app from '../index';

class PostPageContainer extends PureComponent {
  static propTypes = {
    id: propTypes.number,
    blogPosts: propTypes.array,
    authors: propTypes.array,
    comments: propTypes.array,
    loadUsers: propTypes.func,
    loadComments: propTypes.func,
    addComment: propTypes.func,
    loadBlogPosts: propTypes.func,
    match: propTypes.object,
  }

  state = {
    comments: [],
    commentText: '',
  }

  componentDidMount() {
    const {loadUsers, loadComments, loadBlogPosts} = this.props;
    loadUsers();
    loadComments();
    loadBlogPosts();
  }

  handleCommentInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmitButton = e => {
    e.preventDefault();
    const comment = {
      postId: this.props.match.params.id,
      authorId: '1',
      text: this.state.commentText,
      timestamp: new Date(),
    };
    const {addComment} = this.props;
    addComment(comment);
  }

  handleDeleteComment = e => {
    console.log(e.target.name);
    app.delete('comments', {id: e.target.name});
  }

  getPostById(id) {
    let post = {};
    for (let blogPost of this.props.blogPosts) {
      if (+blogPost.id === +id) {
        post = blogPost;
        break;
      }
    }
    return post;
  }

  getCommentsByPostId(id) {
    let postComments = [];
    this.props.comments.forEach(comment => {
      if (+comment.postId === +id) {
        postComments.push(comment);
      }
    });
    return postComments;
  }

  render() {
    if (this.props.blogPosts.length !== 0 && this.props.authors.length !== 0 && this.props.authors.length !== 0) {
      let post = this.getPostById(+this.props.match.params.id);
      let author = this.props.authors[+post.authorId-1];
      let postComments = this.getCommentsByPostId(+post.id);
      return (
        <PostPage post={post} author={author} postComments={postComments} authors={this.props.authors}
          handleCommentInputChange={this.handleCommentInputChange} handleSubmitButton={this.handleSubmitButton}
          handleDeleteComment={this.handleDeleteComment}
        />
      );
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    blogPosts: state.blogPosts.entities,
    authors: state.users.entities,
    comments: state.comments.entities
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    ...ownProps,
    loadUsers: () => dispatch(loadUsers()),
    loadComments: () => dispatch(loadComments()),
    loadBlogPosts: () => dispatch(loadBlogPosts()),
    addComment: (comment) => dispatch(addComment(comment)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPageContainer);
