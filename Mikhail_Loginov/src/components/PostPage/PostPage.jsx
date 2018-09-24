import './PostPage.css';

import React, {PureComponent} from 'react';
import {Container} from 'reactstrap';
import propTypes from 'prop-types';

import blogPosts from 'data/blog-posts';
import authors from 'data/users';
import comments from 'data/comments';

export default class PostPage extends PureComponent {
  static propTypes = {
    id: propTypes.string,
  }

  render() {
    let post = {};

    for (let blogPost of blogPosts) {
      if (blogPost.id === +this.props.id) {
        post = blogPost;
        break;
      }
    }

    // Getting post's author and post's comments
    let author = authors[post.authorID-1];
    let postComments = [];
    comments.forEach(comment => {
      if (comment.postID === post.id) {
        postComments.push(comment);
      }
    })

    // Rendering Comments; showing nothing in case there are no comments
    let renderedComments = '';
    if (postComments.length !== 0) {
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
