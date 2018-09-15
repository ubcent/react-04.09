import './Login.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Login extends Component {
  render() {
    return (
      <form className="login" method="post">
        <label className="login--label">
          Введите login: <input type="text" name="login" placeholder="OlgaMyazina" />
        </label>
        <br />
        <input type="submit" value="Войти" className="login--button" />
      </form>
    );
  }
}
