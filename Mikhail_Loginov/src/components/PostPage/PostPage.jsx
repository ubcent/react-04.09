import './PostPage.css';

import React, {PureComponent} from 'react';
import {Container} from 'reactstrap';
import propTypes from 'prop-types';

import authors from 'data/users';

export default class PostPage extends PureComponent {
  static propTypes = {
    post: propTypes.object,
    author: propTypes.object,
    postComments: propTypes.array,
  }

  render() {
    let {post} = this.props; 
    let {author} = this.props;
    let {postComments} = this.props;

    // Rendering Comments; showing nothing in case there are no comments
    let renderedComments = '';
    if (postComments) {
      renderedComments =
        <div className="post__comments">
          <h4>Comments</h4>
          {postComments.map((comment, index) => {
            let commentAuthor = authors[comment.authorID-1];
            return (
            <div className="comment" key={index}>
              <div className="comment__text">{comment.text}</div>
              <div className="comment__author">Written by {commentAuthor.firstName} {commentAuthor.lastName}</div>
            </div>)
          })}
        </div>;
    }
      
    return (
      <main>
        <Container>
          <div className="post">
            <h1 className="post__title">{post.title}</h1>
            <h3 className="post__subtitle">{post.shortDescription}</h3>
            <p className="post__creds">Posted by {author.firstName} {author.lastName} on {post.date}</p>
            <p className="post__text">{post.text}</p>
          </div>
          {renderedComments}
        </Container>
      </main>
    );
  }
}
