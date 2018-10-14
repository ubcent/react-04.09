import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import PostPage from 'components/PostPage';
import { loadUsers } from 'actions/users';
import { loadComments, addComment, editComment, deleteComment } from 'actions/comments';
import { loadBlogPosts } from 'actions/blog-posts';
import getItemById, { getCommentsByPostId } from '../utils';

class PostPageContainer extends PureComponent {
  static propTypes = {
    id: propTypes.number,
    blogPosts: propTypes.array,
    authors: propTypes.array,
    comments: propTypes.array,
    loadUsers: propTypes.func,
    loadComments: propTypes.func,
    addComment: propTypes.func,
    editComment: propTypes.func,
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
      text: this.state.commentText,
      timestamp: new Date(),
    };
    this.setState({ commentText: '', });
    const { addComment } = this.props;
    addComment(comment);
  }

  handleEditComment = e => {
    const comment = getItemById(this.props.comments, e.currentTarget.name);
    this.setState({ 
      editableCommentId: e.currentTarget.name,
      editableCommentInputText: comment.text,
    });
  }

  handleEditCommentInput = e => {
    this.setState({ editableCommentInputText: e.target.value });
  }

  handleSaveButton = e => {
    const comment = {
      _id: e.target.name,
      postId: this.props.match.params.id,
      text: this.state.editableCommentInputText,
      timestamp: new Date(),
    };
    this.setState({ 
      editableCommentInputText: '', 
      editableCommentId: undefined,
    });
    const { editComment } = this.props;
    editComment(comment);
  }

  handleCancelButton = () => {
    this.setState({ editableCommentId: undefined });
  }

  handleDeleteComment = e => {
    const { deleteComment } = this.props;
    deleteComment(e.target.name);
  }

  render() {
    if (this.props.blogPosts.length !== 0 && this.props.authors.length !== 0 && this.props.comments.length !== 0) {
      const post = getItemById(this.props.blogPosts, this.props.match.params.id);
      const author = getItemById(this.props.authors, post.authorId);
      const postComments = getCommentsByPostId(this.props.comments, post._id);
      return (
        <PostPage post={ post } author={ author } postComments={ postComments } authors={ this.props.authors }
          handleCommentInputChange={ this.handleCommentInputChange } handleSubmitButton={ this.handleSubmitButton }
          handleDeleteComment={ this.handleDeleteComment } commentText = { this.state.commentText }
          editableCommentId={ this.state.editableCommentId } handleEditComment={ this.handleEditComment }
          handleEditCommentInput={ this.handleEditCommentInput } editableCommentInputText={ this.state.editableCommentInputText }
          handleCancelButton={ this.handleCancelButton } handleSaveButton={ this.handleSaveButton }
        />
      );
    } else {
      return '';
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
    editComment: (comment) => dispatch(editComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPageContainer);
