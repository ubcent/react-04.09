import './Login.css';

import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {show: false};
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <button className="login-btn" onClick={this.handleShow}>Войти</button>
        <Modal bsSize="small" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Войти</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="login-form" onSubmit={this.handleSubmit}>
              <div className="input-group">
                <span className="input-group-addon" id="login-input">
                  <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                </span>
                <input type="text" className="form-control" placeholder="Имя пользователя" aria-describedby="login-input" />
              </div>
              <div className="input-group">
                <span className="input-group-addon" id="password-input">
                  <span className="glyphicon glyphicon-lock" aria-hidden="true"></span>
                </span>
                <input type="password" className="form-control" placeholder="Пароль" aria-describedby="password-input" />
              </div>
              <button type="submit" className="btn btn-primary float-right">Войти</button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Login;
