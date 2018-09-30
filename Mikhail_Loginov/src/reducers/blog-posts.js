import {handleActions} from 'redux-actions';

import {blogPostsLoaded} from 'actions/blog-posts';

const initialState = {
  entities: [],
};

export default handleActions({
  [blogPostsLoaded]: (state, actions) => {
    return {
      entities: actions.payload,
    }
  }
}, initialState);
