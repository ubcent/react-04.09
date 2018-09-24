import React from 'react';
import Comment from '../Comment/Comment';


export default props => {
  const { data } = props;

  return (
    <div>
      {data.comments.map((comment, index) => (
        <Comment data={data} comment={comment} key={index} />
      ))}
    </div>
  );
};
