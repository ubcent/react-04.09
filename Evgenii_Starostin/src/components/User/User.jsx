import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function User(props) {
  const { user } = props;

  return (
    <Fragment>
      <h3><span className="label label-default">{user.name}</span></h3>

      <div className="panel panel-default">
        <div className="panel-heading">Блоги</div>
        <div className="panel-body">
          {user.posts.map(post => (
            <article key={post.id} className="article">
              <header className="article__header">
                <h4><Link to={`/posts/${post.id}`}>{post.title}</Link></h4>
              </header>

              <p className="article__paragraph">{post.paragraphs[0]}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="panel panel-default">
        <div className="panel-heading">Комментарии</div>
        <div className="panel-body">
          {user.comments.map(comment => (
            <blockquote key={comment.id}>
              <p><q>{comment.text}</q></p>
            </blockquote>
          ))}
        </div>
      </div>

      <Link to="/users">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
        Вернуться ко списку пользователей
      </Link>
    </Fragment>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

User.defaultProps = {
  user: null,
};

export default User;
