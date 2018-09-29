import './PostsList.css';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PostsList(props) {
  const { posts } = props;

  return (
    posts.map(post => (
      <article key={post.id} className="article">
        <header className="article__header">
          <h3><Link to={`/posts/${post.id}`}>{post.title}</Link></h3>
        </header>

        <p className="article__paragraph">{post.paragraphs[0]}</p>
      </article>
    ))
  );
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.number,
    paragraphs: PropTypes.arrayOf(PropTypes.string),
  })),
};

PostsList.defaultProps = {
  posts: [],
};

export default PostsList;
