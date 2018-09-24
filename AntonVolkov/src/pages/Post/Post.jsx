import './Post.css';
    
import React, { PureComponent } from 'react';

import PostContainer from 'containers/PostContainer';

export default class Post extends PureComponent {
 
  render() {
    const { match } = this.props;
    
    return (
      <div className="post-page">
        <PostContainer postId={match.params.id} />
      </div>
    );
  }
}
    