import './Comment.css';
    
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Comment extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    comment: PropTypes.object,
  };
      
  render() {
    const { comment } = this.props;
    return (
      <div className="comment">
        <p><em>{comment.user.name}</em></p>
        <p><q>{comment.text}</q></p>
        {comment.post && <p><em>To post <Link to={`/blog/post/${comment.postId}`}>{comment.post.title}</Link></em></p>}
        <hr/>
      </div>
    );
  }
}
    