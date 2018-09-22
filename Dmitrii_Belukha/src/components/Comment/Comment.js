import React from 'react';

export default props => {
  const { data, comment } = props;

  const user = data.users.filter(user => user.id === comment.authorId)[0];

  return (
    <div className="card mb-3">
      <div className="card-header">{user.name}</div>
      <div className="card-body">
        <p className="card-text">{comment.text}</p>
      </div>
    </div>
  );
};
