import './UserPosts.css';
    
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PostListContainer from 'containers/PostListContainer';

export default class UserPosts extends PureComponent {

  render() {
    const { match } = this.props;
    return (
      <div className="user-posts">
        <p className="Blog-pege__text">It's Posts of user: Xxx. =)</p>
        <PostListContainer limit={5} userId={match.params.uid} />
      </div>
    );
  }
}
    