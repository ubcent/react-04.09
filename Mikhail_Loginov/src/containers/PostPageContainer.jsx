import React, {PureComponent} from 'react';
import propTypes from 'prop-types';

import blogPosts from 'data/blog-posts';
import PostPage from 'components/PostPage';
import authors from 'data/users';
import comments from 'data/comments';

export default class PostPageContainer extends PureComponent {
  static propTypes = {
    id: propTypes.string,
  }

  render() {
    let post = {};
    for (let blogPost of blogPosts) {
      if (blogPost.id === +this.props.id) {
        post = blogPost;
        break;
      }
    }

    // Getting post's author and post's comments
    let author = authors[post.authorID-1];
    let postComments = [];
    comments.forEach(comment => {
      if (comment.postID === post.id) {
        postComments.push(comment);
      }
    })
      
    return (
      <PostPage post={post} author={author} postComments={postComments}/>
    );
  }
}
