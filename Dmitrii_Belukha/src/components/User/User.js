import React from 'react';

export default props => {
  const { user, data } = props;

  const commentsCount = data.comments.filter(
    comment => user.id === comment.authorId
  ).length;

  const postsCount = data.blogs.filter(blog => user.id === blog.authorId)
    .length;

  return (
    <div className="card mr-5" style={{ width: '18rem' }}>
      <img
        className="card-img-top"
        src="http://placehold.it/286x180"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{`Posts: ${postsCount}`}</li>
          <li className="list-group-item">{`Comments: ${commentsCount}`}</li>
        </ul>
      </div>
    </div>
  );
};
