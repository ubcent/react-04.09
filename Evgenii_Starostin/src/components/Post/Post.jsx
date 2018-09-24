import './Post.css';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post(props) {
  const { post } = props;

  return (
    <article className="article">
      <header className="article__header">
        <h3>{post.title}</h3>
      </header>

      {post.paragraphs.map((paragraph, index) => (
        <p key={index} className="article__paragraph">{paragraph}</p>
      ))}

      <footer className="article__footer">
        <p className="article__author">
          <Link to={`/users/${post.user.id}`}>{post.user.name}</Link>
        </p>
      </footer>

      <Link to="/posts">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
        Вернуться ко списку постов
      </Link>
    </article>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.number,
    paragraphs: PropTypes.arrayOf(PropTypes.string),
  }),
};

Post.defaultProps = {
  post: null,
};

export default Post;
