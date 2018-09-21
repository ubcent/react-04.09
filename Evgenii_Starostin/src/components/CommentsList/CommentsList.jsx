import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function CommentsList(props) {
  const { comments } = props;

  return (
    <Fragment>
      {comments.map(comment => (
        <blockquote key={comment.id}>
          <p><q>{comment.text}</q></p>
          <p><cite><a href="#">{comment.post.title}</a></cite></p>
        </blockquote>
      ))}
    </Fragment>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    postId: PropTypes.number,
    userid: PropTypes.number,
    text: PropTypes.string,
  })),
};

CommentsList.defaultProps = {
  comments: [],
};

export default CommentsList;
