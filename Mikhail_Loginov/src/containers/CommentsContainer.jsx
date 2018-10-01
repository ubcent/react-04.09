import React, {PureComponent} from 'react';
import {Container} from 'reactstrap';
import propTypes from 'prop-types';
import {connect} from 'react-redux';

import Comment from 'components/comment';
import {loadUsers} from 'actions/users';
import {loadComments} from 'actions/comments';
import {loadBlogPosts} from 'actions/blog-posts';

class CommentsContainer extends PureComponent {
  static propTypes = {
    comments: propTypes.array,
    users: propTypes.array,
    blogPosts: propTypes.array,
    loadUsers: propTypes.func,
    loadComments: propTypes.func,
    loadBlogPosts: propTypes.func
  }

  componentDidMount() {
    const {loadUsers, loadComments, loadBlogPosts} = this.props;
    loadUsers();
    loadComments();
    loadBlogPosts();
  }

  renderComment() {
    if (this.props.users.length !== 0 && this.props.comments.length !== 0 && this.props.blogPosts.length !== 0) {
      return (
        <div className="comments">
          {this
            .props
            .comments
            .map((comment, index) => {
              let author = this.props.users[+ comment.authorId - 1];
              let post = this.props.blogPosts[+ comment.postId - 1];
              return (
                <Comment key={index} comment={comment} post={post} author={author}/>
              )
            })}
        </div>
      )
    }

  }

  render() {
    const renderedComments = this.renderComment();

    return (
      <main>
        <Container>
          <h2>Comments</h2>
          {renderedComments}
        </Container>
      </main>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    blogPosts: state.blogPosts.entities,
    users: state.users.entities,
    comments: state.comments.entities
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    ...ownProps,
    loadUsers: () => dispatch(loadUsers()),
    loadComments: () => dispatch(loadComments()),
    loadBlogPosts: () => dispatch(loadBlogPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
