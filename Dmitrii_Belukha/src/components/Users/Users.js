import React from 'react';
import User from '../User/User';

export default props => {
  const { data } = props;
  console.log(data);

  return (
    <div className="row mb-5">
      {data.users.map((user, index) => (
        <User data={data} user={user} key={index} />
      ))}
    </div>
  );
};
