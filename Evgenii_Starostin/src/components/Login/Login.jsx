import './Login.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      isLoggedIn: false,
      login: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ show: false, isLoggedIn: true });
  }

  logOut = () => {
    this.setState({ isLoggedIn: false, login: '', password: '' });
  }

  render() {
    const { show, login, password, isLoggedIn } = this.state;

    return (
      <div>
        {isLoggedIn ? (
          <Fragment>
            <span>{login}</span>
            <button className="logout-btn" onClick={this.logOut}>
              <span className="glyphicon glyphicon glyphicon-remove" aria-hidden="true" title="Выйти"></span>
            </button>
          </Fragment>
        ) : (
          <button className="login-btn" onClick={this.handleShow}>Войти</button>
        )}
        <Modal bsSize="small" show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Войти</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="login-form" onSubmit={this.handleSubmit}>
              <div className="input-group">
                <span className="input-group-addon" id="login-input">
                  <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                </span>
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Имя пользователя"
                  aria-describedby="login-input"
                  name="login"
                  value={login}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-group">
                <span className="input-group-addon" id="password-input">
                  <span className="glyphicon glyphicon-lock" aria-hidden="true"></span>
                </span>
                <input 
                  type="password"
                  className="form-control"
                  placeholder="Пароль"
                  aria-describedby="password-input"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary float-right">Войти</button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

