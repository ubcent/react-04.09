import './Post.css';

import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  const { post, handleClick } = props;

  return (
    <article className="article">
      <header className="article__header">
        <h3>{post.title}</h3>
      </header>

      {post.paragraphs.map((paragraph, index) => (
        <p key={index} className="article__paragraph">{paragraph}</p>
      ))}

      <footer className="article__footer">
        <p className="article__author">{post.user.name}</p>
      </footer>

      <a href="#" onClick={handleClick}>
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
        Вернуться ко списку постов
      </a>
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
  handleClick: PropTypes.func,
};

Post.defaultProps = {
  post: null,
  handleClick: null,
};

export default Post;
