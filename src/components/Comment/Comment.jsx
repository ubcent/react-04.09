import './Comment.css';

import React, { PureComponent } from 'react';

export default class Comment extends PureComponent {
  render() {
    const { comment } = this.props;
    return (
      <div className="Comment">
        <h2>{comment.name}</h2>
        <div>{comment.body}</div>
      </div>
    );
  }
}
