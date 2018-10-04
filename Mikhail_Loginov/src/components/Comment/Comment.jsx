import './Comment.css';

import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';

export default class Comment extends PureComponent {
  static propTypes = {
    post: propTypes.object,
    author: propTypes.object,
    comment: propTypes.object,
  }

  render() {
    const {post, author, comment} = this.props;
    return (
      <div className="comments__item">
        <Link className="comments__text" to={`/post/${ + (post.id)}`} post={post}>
          {comment.text}
        </Link>
        <div className="comments__author">Wrote by {author.firstName}
          {author.lastName}</div>
      </div>
    );
  }
}
