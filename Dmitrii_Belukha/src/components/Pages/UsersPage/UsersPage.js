import React from 'react';
import Users from '../../Users/Users';

function UsersPage(props) {
  const { data } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="my-4">Users</h1>
          <Users data={data} />
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
