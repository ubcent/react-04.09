import React, { Component } from 'react';
import PostFeed from '../../PostFeed/PostFeed';
import Sidebar from '../../Sidebar/Sidebar';
import Pagination from '../../Pagination/Pagination';

function MainPage(props) {
  const { data } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h1 className="my-4">Blog</h1>
          <PostFeed data={data} />
          <Pagination />
        </div>
        <div className="col-md-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
