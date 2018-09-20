import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">React Blog</a>
          <a
            className="btn btn-sm btn-outline-secondary"
            href="#"
            data-toggle="modal"
            data-target="#login-modal"
          >
            Login
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
