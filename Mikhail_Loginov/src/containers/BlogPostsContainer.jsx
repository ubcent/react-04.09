import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import BlogPost from 'components/BlogPost';
import { loadBlogPosts } from 'actions/blog-posts';
import { loadUsers } from 'actions/users';
import getAuthorById from '../utils';

class BlogPostsContainer extends PureComponent {
  static propTypes = {
    blogPosts: propTypes.array,
    authors: propTypes.array,
    loadBlogPosts: propTypes.func,
    loadUsers: propTypes.func,
  }

  componentDidMount() {
    const { loadBlogPosts, loadUsers } = this.props;
    loadBlogPosts();
    loadUsers();
  }

  render() {
    if (this.props.blogPosts.length !== 0 && this.props.authors.length !== 0) {
      return (
        <main>
          <Container>
            {this.props.blogPosts.map((post, index) => {
              const author = getAuthorById(this.props.authors, post.authorId);
              return (
                <div className="blog-posts" key={index}>
                  <BlogPost post={post} author={author}/>
                </div>
              )
            })}
          </Container>
        </main>
      );
    } else {
      return '';
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
