import './Login.scss';

import React, { PureComponent } from 'react';
import classNames from 'classnames';

export default class Login extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            showPopup: false
        };
    }

    render() {

        const popupClasses = classNames('login__popup', {
            'login__popup_active': this.state.showPopup,
        });

        return (
            <div className="base-nav__item login" id="login">
                <button className="login__button" onClick={() => {
                    this.setState({
                        showPopup: !this.state.showPopup
                    });
                }}>LOGIN</button>
                <div className={popupClasses}>
                    <form action="#" method="post">
                        <input type="text" className="input-dfl login__input" placeholder="Введите логин"/>
                        <input type="password" className="input-dfl login__input" placeholder="Введите пароль"/>
                        <input type="submit" className="button-dfl login__submit" value="Войти"/>
                    </form>
                </div>
            </div>
        );
    }
}