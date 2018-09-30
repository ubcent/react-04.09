import React, { Component } from 'react';
import PostPreview from '../PostPreview/PostPreview';

function PostFeed(props) {
  const { data } = props;
  const { blogs } = data;
  console.log(data);

  return (
    <div>
      {blogs.map((blog, index) => (
        <PostPreview data={data} blog={blog} key={index} />
      ))}
    </div>
  );
}

export default PostFeed;
