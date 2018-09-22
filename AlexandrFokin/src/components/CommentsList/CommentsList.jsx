import './CommentsList.scss';

import React, {PureComponent} from 'react';

/**
 * Класс CommentsList - компонент, отображающий комментарии на странице
 */
export default class CommentsList extends PureComponent {
  render() {
    const {comments} = this.props;
    return(
      <ul>
        {comments.map(
          (comment, idx) => <li key={idx}>{comment.author}: {comment.message}</li>
        )}
      </ul>
    );
  }
}