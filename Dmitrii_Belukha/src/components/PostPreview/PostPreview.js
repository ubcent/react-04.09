import React, { Component } from 'react';

function PostPreview(props) {
  const { data, blog } = props;

  const user = data.users.filter(user => user.id === blog.authorId);

  return (
    <div className="card mb-4">
      <img
        className="card-img-top"
        src="http://placehold.it/750x300"
        alt="Card image cap"
      />
      <div className="card-body">
        <h2 className="card-title">{blog.name}</h2>
        <p className="card-text">{`${blog.text.slice(0, 40)}...`}</p>
        <a href="#" className="btn btn-primary">
          Read More →
        </a>
      </div>
      <div className="card-footer text-muted">
        Posted on January 1, 2017 by
        <a href="#"> {}</a>
      </div>
    </div>
  );
}

export default PostPreview;
