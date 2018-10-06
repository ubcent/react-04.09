import './User.css';

import React, {PureComponent} from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

export default class User extends PureComponent {
  static propTypes = {
    user: propTypes.object,
    userComments: propTypes.array,
    userPosts: propTypes.array,
    handleUsernameClick: propTypes.func,
    collapsedUsersIDs: propTypes.array,
  }

  renderPosts() {
    const {userPosts} = this.props;
    let renderedPosts = '';
    if (userPosts.length !== 0) {
      renderedPosts = <div>
        <div className="user__subtitle">Wrote posts</div>
        {userPosts.map((post, index) => <div key={index}>{post.title}</div>)}
      </div>;
    }
    return renderedPosts;
  }

  renderComments() {
    const {userComments} = this.props;
    let renderedComments = '';
    if (userComments.length !== 0) {
      renderedComments = <div>
        <div className="user__subtitle">Wrote comments</div>
        {userComments.map((comment, index) => <div key={index}>{comment.text}</div>)}
      </div>;
    }
    return renderedComments;
  }

  renderActivity() {
    const {user} = this.props;
    const renderedPosts = this.renderPosts();
    const renderedComments = this.renderComments();

    // Rendering overall user activity; showing special phrase if there is no user activity
    let activityClass = classNames({
      'user__expanded': true,
      'hidden': this.props.collapsedUsersIDs.indexOf(user.id) === -1
    });
    let renderedActivity = <div className={activityClass}>
      This user has no activity
    </div>;
    if (renderedComments !== '' || renderedPosts !== '') {
      renderedActivity = <div className={activityClass}>
        <div className="user__title">Activity</div>
        {renderedPosts}
        {renderedComments}
      </div>;
    }
    return renderedActivity;
  }

  render() {
    const {user} = this.props;
    const renderedActivity = this.renderActivity();

    return (
      <div className="user">
        <span
          name={user.id}
          onClick={this.props.handleUsernameClick}
          className="user__name">{user.firstName} {user.lastName}</span>
        {renderedActivity}
      </div>
    );
  }
}
