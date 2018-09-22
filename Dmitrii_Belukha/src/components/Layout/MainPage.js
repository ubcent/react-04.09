import React, { Component } from 'react';
import PostFeed from '../PostFeed/PostFeed';
import Sidebar from '../Sidebar/Sidebar';
import Pagination from '../Pagination/Pagination';

class MainPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="my-4">Page Heading</h1>
            <PostFeed />
            <Pagination />
          </div>
          <div className="col-md-4">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
