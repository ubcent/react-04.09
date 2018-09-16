import './Login.scss';

import React, { Component } from 'react';
import classNames from 'classnames';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCloseFrom: true,
    };
    this.authLink = this.props.authLink;
  }

  openForm = () => {
    this.setState({isCloseFrom: false})
  }

  closeForm =() => {
    this.setState({isCloseFrom: true})
  }

  sendForm = () => {
    this.closeForm();
  }

  render() {
    const formClass = classNames('login-form', {
      'login-form hidden': this.state.isCloseFrom,
    });
    return (
        <div>
          <button className="auth-button" onClick={this.openForm}>Авторизоваться</button>
          <div className={formClass}>
            <form action={this.authLink} method="post">
              <label htmlFor="login">Логин</label>
              <input type="text" id="login"/>
              <label htmlFor="password">Пароль</label>
              <input type="password" id="password"/>
              <input type="button" value="Войти" onClick={this.sendForm}/>
            </form>
            <div onClick={this.closeForm}>x</div>
          </div>
        </div>
    );
  }
  
}

