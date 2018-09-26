import './CommentsList.css';

import React, { Component, PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class CommentsList extends Component {
  render() {
    const { comments, onLoadMore } = this.props;

    return (
      <div>
        <ol>
          {comments.map((comment, idx) => <li key={idx}><Link to={`/comments/${comment.id}`}>{comment.name}</Link>: {comment.body}</li>)}
        </ol>
        <button onClick={onLoadMore}>Load more</button>
      </div>
    );
  }
}