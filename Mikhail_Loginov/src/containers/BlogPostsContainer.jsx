import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';

import BlogPost from 'components/BlogPost';

class BlogPosts extends PureComponent {
  static propTypes = {
    blogPosts: PropTypes.array,
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
    authors: state.users,
    comments: state.comments
  }
}

export default connect(mapStateToProps)(BlogPosts);
