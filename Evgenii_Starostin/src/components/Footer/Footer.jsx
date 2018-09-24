import './Footer.css';

import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-menu">
          <li className="footer-menu__item"><Link to="#">О проекте</Link></li>
          <li className="footer-menu__item"><Link to="#">Пользовательское соглашение</Link></li>
          <li className="footer-menu__item"><Link to="#">Помощь</Link></li>
        </ul>
      </div>
    </footer>
  );
}
