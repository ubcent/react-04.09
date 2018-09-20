import './BlogPost.css';

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Container} from 'reactstrap';

export default class BlogPost extends Component {

  render() {

    return (
      <main>
        <Container>
          <div className="blog-post">
            <Link to={{ pathname: '/post/' + this.props.post.id, hash: ''}} post={this.props.post}>
              <h2 className="blog-post__title">{this.props.post.title}</h2>
              <h3 className="blog-post__subtitle">{this.props.post.shortDescription}</h3>
            </Link>
            <p>Posted by {this.props.post.author} on {this.props.post.date}</p>
          </div>
        </Container>
      </main>
    );
  }
}
