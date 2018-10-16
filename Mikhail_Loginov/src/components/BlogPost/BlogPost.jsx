import './BlogPost.css';

import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import moment from 'moment';

export default class BlogPost extends PureComponent {
  static propTypes = {
    post: propTypes.object,
    author: propTypes.object,
  }

  render() {
    if (this.props.author && this.props.post) {
      return (
        <div className="blog-post">
          <Link to={`/post/${this.props.post._id}`} post={this.props.post}>
            <h2 className="blog-post__title">{this.props.post.title}</h2>
            <h3 className="blog-post__subtitle">{this.props.post.shortDescription}</h3>
          </Link>
          <p>Posted by {this.props.author.firstName} {this.props.author.lastName} on {moment(this.props.post.timestamp).format('MMMM Do YYYY')}</p>
        </div>
      );
    } else {
      return '';
    }
  }
}
