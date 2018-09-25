import React, {PureComponent} from 'react';
import {Container} from 'reactstrap';

import BlogPost from 'components/BlogPost';
import blogPosts from 'data/blog-posts';

export default class BlogPosts extends PureComponent {
  render() {
    return (
      <main>
        <Container>
          {blogPosts.map(post => 
            <div className="blog-posts" key={post.id}>
              <BlogPost post={post} />
            </div>
          )}
        </Container>
      </main>
    );
  }
}
