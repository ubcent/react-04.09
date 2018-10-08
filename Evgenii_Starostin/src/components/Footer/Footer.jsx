import './Footer.css';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Footer(props) {
  const { links } = props;

  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-menu">
          {links.map((link, index) => (
            <li key={index} className="footer-menu__item"><Link to={link.href}>{link.title}</Link></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.string,
  })),
};

Footer.defaultProps = {
  links: [],
};

export default Footer;
