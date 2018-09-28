import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { IComment } from 'Models';

function CommentsList(props) {
  const { comments } = props;

  return (
    <Fragment>
      {comments.map(comment => (
        <blockquote key={comment.id}>
          <p><q>{comment.text}</q></p>
          <p><cite><Link to={`/posts/${comment.post.id}`}>{comment.post.title}</Link></cite></p>
        </blockquote>
      ))}
    </Fragment>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(IComment),
};

CommentsList.defaultProps = {
  comments: [],
};

export default CommentsList;
