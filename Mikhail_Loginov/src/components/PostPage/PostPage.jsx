import './PostPage.css';

import React, {PureComponent} from 'react';
import {Container} from 'reactstrap';
import propTypes from 'prop-types';

import blogPosts from '../../data/blog-posts';
import authors from '../../data/users';

export default class PostPage extends PureComponent {
  static propTypes = {
    id: propTypes.string,
  }

  render() {
    let post = {};

    blogPosts.map(currPost => {
      if (currPost.id === + this.props.id) {
        post = currPost;
      }
    });

    let author = authors[post.authorID];

    return (
        <main>
          <Container>
            <div className="post">
              <h1 className="post__title">{post.title}</h1>
              <h3 className="post__subtitle">{post.shortDescription}</h3>
              <p className="post__creds">Posted by {author.firstName} {author.lastName} on {post.date}</p>
              <p className="post__text">{post.text}</p>
            </div>
          </Container>
        </main>
    );
  }
}
