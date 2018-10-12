import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import PostPage from 'components/PostPage';
import { loadUsers } from 'actions/users';
import { loadComments, addComment, deleteComment } from 'actions/comments';
import { loadBlogPosts } from 'actions/blog-posts';

// import app from '../index';

class PostPageContainer extends PureComponent {
  static propTypes = {
    id: propTypes.number,
    blogPosts: propTypes.array,
    authors: propTypes.array,
    comments: propTypes.array,
    loadUsers: propTypes.func,
    loadComments: propTypes.func,
    addComment: propTypes.func,
    deleteComment: propTypes.func,
    loadBlogPosts: propTypes.func,
    match: propTypes.object,
  }

  state = {
    comments: [],
    commentText: '',
    editableCommentId: undefined,
    editableCommentInputText: '',
  }

  componentDidMount() {
    const { loadUsers, loadComments, loadBlogPosts } = this.props;
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
    this.setState({ commentText: '', });
    const { addComment } = this.props;
    addComment(comment);
  }

  handleEditComment = e => {
    const comment = this.getCommentById(e.currentTarget.name);
    this.setState({ 
      editableCommentId: +e.currentTarget.name,
      editableCommentInputText: comment.text,
    });
  }

  handleEditCommentInput = e => {
    this.setState({ editableCommentInputText: e.target.value });
  }

  handleCancelButton = () => {
    this.setState({ editableCommentId: undefined });
  }

  handleDeleteComment = e => {
    const { deleteComment } = this.props;
    deleteComment(e.target.name);
  }

  getCommentById(id) {
    for (let comment of this.props.comments) {
      if (+comment.id === +id) {
        return comment;
      }
    }
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
        <PostPage post={ post } author={ author } postComments={ postComments } authors={ this.props.authors }
          handleCommentInputChange={ this.handleCommentInputChange } handleSubmitButton={ this.handleSubmitButton }
          handleDeleteComment={ this.handleDeleteComment } commentText = { this.state.commentText }
          editableCommentId={ this.state.editableCommentId } handleEditComment={ this.handleEditComment }
          handleEditCommentInput={ this.handleEditCommentInput } editableCommentInputText={ this.state.editableCommentInputText }
          handleCancelButton={ this.handleCancelButton }
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
    deleteComment: (id) => dispatch(deleteComment(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPageContainer);
