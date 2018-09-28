import './Comments.css';

import React, {PureComponent} from 'react';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import {connect} from 'react-redux';

class Comments extends PureComponent {
  static propTypes = {
    comments: propTypes.array,
    users: propTypes.array,
    blogPosts: propTypes.array,
  }

  renderComment() {
    return (
      <div className="comments">
        {this.props.comments.map((comment, index) => {
          let author = this.props.users[comment.authorID-1];
          let post = this.props.blogPosts[comment.postID-1];
          return (<div className="comments__item" key={index}>
            <Link className="comments__text" to={`/post/${post.id}`} post={post}>
              {comment.text}
            </Link>
            <div className="comments__author">Wrote by {author.firstName} {author.lastName}</div>
          </div>)
        })}
      </div>
    )
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
    blogPosts: state.blogPosts,
    users: state.users,
    comments: state.comments,
  }
}

export default connect(mapStateToProps)(Comments);
