import './Comments.css';

import React, {PureComponent} from 'react';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';

import comments from 'data/comments';
import users from 'data/users';
import blogPosts from 'data/blog-posts';

export default class BlogPosts extends PureComponent {
  renderComment() {
    return (
      <div className="comments">
        {comments.map((comment, index) => {
          let author = users[comment.authorID-1];
          let post = blogPosts[comment.postID-1];
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
