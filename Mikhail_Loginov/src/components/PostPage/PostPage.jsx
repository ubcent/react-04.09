import './PostPage.css';

import React, {PureComponent} from 'react';
import {Container} from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class PostPage extends PureComponent {
  static propTypes = {
    post: PropTypes.object,
    author: PropTypes.object,
    postComments: PropTypes.array,
    authors: PropTypes.array,
  }

  renderPost(post, author) {
    return (
      <div className="post">
        <h1 className="post__title">{post.title}</h1>
        <h3 className="post__subtitle">{post.shortDescription}</h3>
        <p className="post__creds">Posted by {author.firstName} {author.lastName} on {post.date}</p>
        <p className="post__text">{post.text}</p>
      </div>
    )
  }

  renderComments(postComments) {
    let renderedComments = '';
    if (postComments.length !== 0) {
      renderedComments =
        <div className="post__comments">
          <h4>Comments</h4>
          {postComments.map((comment, index) => {
            let commentAuthor = this.props.authors[comment.authorID-1];
            return (
            <div className="comment" key={index}>
              <div className="comment__text">{comment.text}</div>
              <div className="comment__author">Written by {commentAuthor.firstName} {commentAuthor.lastName}</div>
            </div>)
          })}
        </div>;
    }
    return renderedComments;
  }

  render() {
    let renderedPost = this.renderPost(this.props.post, this.props.author);
    let renderedComments = this.renderComments(this.props.postComments);
    
    return (
      <main>
        <Container>
          {renderedPost}
          {renderedComments}
        </Container>
      </main>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    authors: state.users,
  }
}

export default connect(mapStateToProps)(PostPage);
