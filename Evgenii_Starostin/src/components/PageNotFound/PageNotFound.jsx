import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PageNotFound(props) {
  const { location } = props;

  return (
    <div className="jumbotron">
      <h1>Ошибка 404</h1>
      <p>Страница &laquo;<em>{location.pathname}</em>&raquo; не найдена</p>
      <p><Link to="/" className="btn btn-primary btn-lg" role="button">На главную</Link></p>
    </div>
  );
}

PageNotFound.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

PageNotFound.defaultProps = {
  location: { pathname: '' },
};

export default PageNotFound;
