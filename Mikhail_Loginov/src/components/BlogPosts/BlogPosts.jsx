import './BlogPosts.css';

import React, {PureComponent} from 'react';
import {Container} from 'reactstrap';
import propTypes from 'prop-types';
import {connect} from 'react-redux';

import BlogPost from 'components/BlogPost';

class BlogPosts extends PureComponent {
  static propTypes = {
    blogPosts: propTypes.array,
  }

  render() {
    return (
      <main>
        <Container>
          {this.props.blogPosts.map(post => 
            <div className="blog-posts" key={post.id}>
              <BlogPost post={post} />
          </div>
          )}
        </Container>
      </main>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    blogPosts: state.blogPosts,
  }
}

export default connect(mapStateToProps)(BlogPosts);
