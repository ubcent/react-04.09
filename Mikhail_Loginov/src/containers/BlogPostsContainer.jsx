import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';

import BlogPost from 'components/BlogPost';
import {loadBlogPosts} from 'actions/blog-posts';
import {loadUsers} from 'actions/users';

class BlogPostsContainer extends PureComponent {
  static propTypes = {
    blogPosts: propTypes.array,
    authors: propTypes.array,
    loadBlogPosts: propTypes.func,
    loadUsers: propTypes.func,
  }

  componentDidMount() {
    const {loadBlogPosts, loadUsers} = this.props;
    loadBlogPosts();
    loadUsers();
  }

  render() {
    if (this.props.blogPosts.length !== 0 && this.props.authors.length !== 0) {
      return (
        <main>
          <Container>
            {this.props.blogPosts.map(post => {
              let author = this.props.authors[+post.authorId-1];
              return (
                <div className="blog-posts" key={post.id}>
                  <BlogPost post={post} author={author}/>
                </div>
              )
            })}
          </Container>
        </main>
      );
    } else {
      return null;
    }

  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    blogPosts: state.blogPosts.entities,
    authors: state.users.entities,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    ...ownProps,
    loadBlogPosts: () => dispatch(loadBlogPosts()),
    loadUsers: () => dispatch(loadUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostsContainer);
