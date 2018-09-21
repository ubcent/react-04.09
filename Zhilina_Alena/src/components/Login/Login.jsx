import './Login.css'

import React, { PureComponent} from 'react';

export default class Login extends PureComponent{
    render(){
        return(
            <div className="aside-block-wrap">
                <span className="block-title">Log in</span>
                <div className="form-box">
                    <form className="form-login" action="#" method="post">
                        <label className="form-login__label" htmlFor="login">Login</label>
                        <input name="login" className="form-login__input" type="text"/>
                        <label className="form-login__label" htmlFor="password">Password</label>
                        <input name="password" className="form-login__input" type="password"/>
                        <button className="button">Log in!</button>
                    </form>
                </div>

            </div>
        )
    }
}