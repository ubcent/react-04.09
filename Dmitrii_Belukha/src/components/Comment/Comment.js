import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  const { data, match } = props;

  const comment = props.comment
    ? props.comment
    : data.comments.find(c => c.id === +match.params.id);

  const user = data.users.filter(user => user.id === comment.authorId)[0];

  return (
    <div className="card mb-3">
      <div className="card-header">{user.name}</div>
      <div className="card-body">
        <p className="card-text">{comment.text}</p>
        <Link to={`/comments/${comment.id}`}>Go to the comment</Link>
      </div>
    </div>
  );
};
