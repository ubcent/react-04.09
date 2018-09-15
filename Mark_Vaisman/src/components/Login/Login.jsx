import './Login.scss';

import React, { Component } from 'react';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formClass: 'login-form hidden'
        };
        this.authLink = this.props.authLink;
    }

    openForm() {
        this.setState({formClass: 'login-form'})
    }

    closeForm() {
        this.setState({formClass: 'login-form hidden'})
    }

    sendForm() {
        this.closeForm();
    }

    render() {

        return (
                <div>
                    <button className="auth-button" onClick={this.openForm.bind(this)}>Авторизоваться</button>
                    <div className={this.state.formClass}>
                        <form action={this.authLink} method="post">
                            <label htmlFor="login">Логин</label>
                            <input type="text" id="login"/>
                            <label htmlFor="password">Пароль</label>
                            <input type="password" id="password"/>
                            <input type="button" value="Войти" onClick={this.sendForm.bind(this)}/>
                        </form>
                        <div onClick={this.closeForm.bind(this)}>x</div>
                    </div>
                </div>
                );
    }
}

