import React from 'react';
import Users from '../../Users/Users';
import Comments from '../../Comments/Comments';

function CommentsPage(props) {
  const { data } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="my-4">Comments</h1>
          <Comments data={data} />
        </div>
      </div>
    </div>
  );
}

export default CommentsPage;
