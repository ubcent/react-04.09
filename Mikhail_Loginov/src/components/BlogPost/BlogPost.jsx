import './BlogPost.css';

import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import {connect} from 'react-redux';

class BlogPost extends PureComponent {
  static propTypes = {
    post: propTypes.object,
    authors: propTypes.array,
  }

  render() {
    let author = this.props.authors[this.props.post.authorID-1];
    return (
      <div className="blog-post">
        <Link to={`/post/${this.props.post.id}`} post={this.props.post}>
          <h2 className="blog-post__title">{this.props.post.title}</h2>
          <h3 className="blog-post__subtitle">{this.props.post.shortDescription}</h3>
        </Link>
        <p>Posted by {author.firstName} {author.lastName} on {this.props.post.date}</p>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    authors: state.users,
  }
}

export default connect(mapStateToProps)(BlogPost);
