import './Header.css';

import React from 'react';

import Login from 'Components/Login';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="top-bar">
          <div className="logo-section">
            <h1 className="logo">Блог</h1>
          </div>
          <div className="login-section">
            <Login />
          </div>
        </div>
      </div>
    </header>
  );
}
