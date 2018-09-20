import React, { Component } from 'react';
import PostPreview from '../PostPreview/PostPreview';

class PostFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  render() {
    return (
      <div>
        <PostPreview />
        <PostPreview />
        <PostPreview />
      </div>
    );
  }
}

export default PostFeed;
