import './PostPage.css';

import React, {Component, Fragment} from 'react';
import {Container} from 'reactstrap';

import blogPosts from '../../data/blog-posts.js';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default class PostPage extends Component {

  render() {
    let post = {};

    blogPosts.map(currPost => {
      if (currPost.id === + this.props.id) {
        post = currPost;
      }
    });

    console.log(blogPosts, post);

    return (
      <Fragment>
        <Header/>
        <main>
          <Container>
            <div className="post">
              <h1 className="post__title">{post.title}</h1>
              <h3 className="post__subtitle">{post.shortDescription}</h3>
              <p className="post__creds">Posted by {post.author} on {post.date}</p>
              <p className="post__text">{post.text}</p>
            </div>
          </Container>
        </main>
        <Footer/>
      </Fragment>
    );
  }
}
