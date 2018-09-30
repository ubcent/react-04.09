import React, {PureComponent} from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

import User from 'components/User';
import {loadUsers} from 'actions/users';
import {loadComments} from 'actions/comments';
import {loadBlogPosts} from 'actions/blog-posts';

class UsersContainer extends PureComponent {
  state = {
    collapsedUsersIDs: [],
  }

  static propTypes = {
    users: propTypes.array,
    comments: propTypes.array,
    blogPosts: propTypes.array,
    loadUsers: propTypes.func,
    loadComments: propTypes.func,
    loadBlogPosts: propTypes.func,
  }

  componentDidMount() {
    const {loadUsers, loadComments, loadBlogPosts} = this.props;
    loadUsers();
    loadComments();
    loadBlogPosts();
  }

  //Adding user to collapsedUsersIDs array on first click and removing from this array on second click
  handleUsernameClick = e => {
    let user = this.props.users[e.target.getAttribute('name')-1];
    if (this.state.collapsedUsersIDs.indexOf(user.id) === -1) {
      this.setState({
        collapsedUsersIDs: this.state.collapsedUsersIDs.concat(user.id)
      });
    } else {
      this.setState({
        collapsedUsersIDs: this.state.collapsedUsersIDs.filter(id => id !== user.id)
      });
    }
  }

  getUserPosts(user) {
    let userPosts = [];
    this.props.blogPosts.forEach(blogPost => {
      if (blogPost.authorId === user.id) {
        userPosts.push(blogPost);
      }
    });
    return userPosts;
  }

  getUserComments(user) {
    let userComments = [];
    this.props.comments.map(comment => {
      if (comment.authorId === user.id) {
        userComments.push(comment);
      }
    });
    return userComments;
  }

  renderUsersList() {
    return this.props.users.map((user, index) => {
      let userPosts = this.getUserPosts(user);
      let userComments = this.getUserComments(user);

      return <User key={index} userPosts={userPosts} userComments={userComments} 
        user={user} handleUsernameClick={this.handleUsernameClick} 
        collapsedUsersIDs={this.state.collapsedUsersIDs}/>
    });
  }

  render() {
    return (
      <main>
        <Container>
          {this.renderUsersList()}
        </Container>
      </main>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    blogPosts: state.blogPosts.entities,
    users: state.users.entities,
    comments: state.comments.entities
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    ...ownProps,
    loadUsers: () => dispatch(loadUsers()),
    loadComments: () => dispatch(loadComments()),
    loadBlogPosts: () => dispatch(loadBlogPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
