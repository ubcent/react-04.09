/********************************************************************
 * Includes                                                          *
 ********************************************************************/

/*import styles*/
import './UserNotLogin.scss';

/*import libs*/
import React, {Component, Fragment} from 'react';
import  PropTypes from 'prop-types';

import 'bootstrap/modal';

import $ from 'jquery';

/*User input*/

/********************************************************************
 * Code                                                             *
 ********************************************************************/

/**
 * @brief  Отрисовка бокового окна с ссылками на архив
 * @retval  Отрисованное окно со спискм ссылок
 */
export default class UserNotLogin extends Component {

    onSubmitClick= () => {
        this.props.onSend({
            login: this.logininput.value,
            password: this.password.value,
        });
        this.logininput.value = '';
        this.password.value = '';
        $('#login-window').modal('toggle');
    };
    
    render() {
        const {onSend} = this.props;
        return (
            <Fragment>
                <p className="user-ask-login"><span data-toggle="modal" data-target="#login-window">Войдите</span></p>
                <div className="modal fade" id="login-window" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel"><i className="fa fa-key"></i>Авторизация</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="#">
                                    <label htmlFor="user-login">Введите логин</label><br/>
                                    <input className="input-login" type="text" placeholder="Login" id="user-login" ref={(input) => {this.logininput = input}}/><i className="fa fa-envelope-o "></i><br/>
                                    <label htmlFor="user-password">Введите пароль</label><br/>
                                    <input className="input-password" type="password" placeholder="Password"  id="user-password" ref={(input) => {this.password = input}}/><i className="fa fa-lock"></i><br/>
                                    <input className="input-submit" type="submit" value="Войти"  onClick={this.onSubmitClick}/>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <a href="#">Регистрация</a>
                                <a href="#">Забыли пароль?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}