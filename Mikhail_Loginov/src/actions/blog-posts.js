import { createAction } from 'redux-actions';

import app from '../index';

export const blogPostsLoaded = createAction('[BlogPosts] Load');

export const loadBlogPosts = () => (dispatch) => {
  app.get('blog-posts').then(res => {
    res.json().then(blogPosts => {
      dispatch(blogPostsLoaded(blogPosts));
    })
  });
}
