import './PostsList.css';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { IPost } from 'Models';

function PostsList(props) {
  const { posts } = props;

  return (
    posts.map(post => (
      <article key={post._id} className="article">
        <header className="article__header">
          <h3><Link to={`/posts/${post._id}`}>{post.title}</Link></h3>
        </header>

        <p className="article__paragraph">{post.paragraphs[0]}</p>
      </article>
    ))
  );
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(IPost),
};

PostsList.defaultProps = {
  posts: [],
};

export default PostsList;
