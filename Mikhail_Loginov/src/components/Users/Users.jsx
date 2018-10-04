import './Users.css';

import React, {PureComponent} from 'react';
import {Container} from 'reactstrap';
import classNames from 'classnames';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Users extends PureComponent {
  state = {
    collapsedUsersIDs: [],
  }

  static propTypes = {
    users: PropTypes.array,
    comments: PropTypes.array,
    blogPosts: PropTypes.array,
  }

  //Adding user to collapsedUsersIDs array on first click and removing from this array on second click
  handleUserNameClick = e => {
    let user = this.props.users[e.target.getAttribute('name')-1];
    if (this.state.collapsedUsersIDs.indexOf(user.id) === -1) {
      this.setState({collapsedUsersIDs: this.state.collapsedUsersIDs.concat(user.id)});
    } else {
      let tempArray = this.state.collapsedUsersIDs.slice();
      tempArray.splice(tempArray.indexOf(user.id),1);
      this.setState({collapsedUsersIDs: tempArray});
    }
  }

  renderUsersList() {
    return this.props.users.map((user, index) => {
      // Getting all user posts and all user comments
      let userPosts = [];
      let userComments = [];
      this.props.blogPosts.map(blogPost => {
        if (blogPost.authorID === user.id) {
          userPosts.push(blogPost);
        }
      });
      this.props.comments.map(com => {
        if (com.authorID === user.id) {
          userComments.push(com);
        }
      });

      // Rendering posts and comments; showing nothing if there is no posts or no comments respectfully
      let renderedPosts = '';
      if (userPosts.length !== 0) {
        renderedPosts = 
          <div>
            <div className="user__subtitle">Wrote posts</div>
            {userPosts.map((post, index) => <div key={index}>{post.title}</div>)}
          </div>;
      }
      let renderedComments = '';
      if (userComments.length !== 0) {
        renderedComments = 
          <div>
            <div className="user__subtitle">Wrote comments</div>
            {userComments.map((comment, index) => <div key={index}>{comment.text}</div>)}
          </div>;
      }

      // Rendering overall user activity; showing special phrase if there is no user activity
      let activityClass = classNames({
        'user__expanded': true,
        'hidden': this.state.collapsedUsersIDs.indexOf(user.id) === -1
      });
      let renderedActivity = 
        <div className={activityClass}>
          This user has no activity
        </div>;
      if (renderedComments !== '' || renderedPosts !== '') {
        renderedActivity = 
          <div className={activityClass}>
            <div className="user__title">Activity</div>
            {renderedPosts}
            {renderedComments}
          </div>;
      }
      return (
      <div className="user" key={index}>
        <span name={user.id} onClick={this.handleUserNameClick} className="user__name">{user.firstName} {user.lastName}</span>
        {renderedActivity}
      </div>);
    });
  }

  render() {
    const renderedUsersList = this.renderUsersList();
    return (
      <main>
        <Container>
          {renderedUsersList}
        </Container>
      </main>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    blogPosts: state.blogPosts,
    users: state.users,
    comments: state.comments
  }
}

export default connect(mapStateToProps)(Users);
