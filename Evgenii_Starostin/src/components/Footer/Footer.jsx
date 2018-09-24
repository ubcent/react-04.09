import './Footer.css';

import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-menu">
          <li className="footer-menu__item"><a href="#">О проекте</a></li>
          <li className="footer-menu__item"><a href="#">Пользовательское соглашение</a></li>
          <li className="footer-menu__item"><a href="#">Помощь</a></li>
        </ul>
      </div>
    </footer>
  );
}
