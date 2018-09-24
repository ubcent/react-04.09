import './CommentList.css';
    
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Comment from 'components/Comment';

export default class CommentList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    comments: PropTypes.array,
  };

  static defaultProps = {
    comments: [],
  };
      
  render() {
    const { comments } = this.props;

    return (
      <div className="comment-list">
        {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
      </div>
    );
  }
}
    