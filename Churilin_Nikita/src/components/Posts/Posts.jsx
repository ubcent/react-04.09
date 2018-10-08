import './Posts.css';

import React, {PureComponent} from 'react';

import Post from 'components/Post';

import posts_archive from 'components/posts_archive';

export default class Posts extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  };
  
  render() {
    return (
      <div className="posts">
        {posts_archive.map(function(post, key) {
          return <Post key={key}
                       heading={post.heading}
                       shortDescriprion={post.shortDescriprion}
                       author={post.author}
                       date={post.date}
                       link={post.id}>
                 </Post>
        })}
      </div>
    );
  };
};
