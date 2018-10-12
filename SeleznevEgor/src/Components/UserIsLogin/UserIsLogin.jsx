/********************************************************************
 * Includes                                                          *
 ********************************************************************/

/*import styles*/
import './UserIsLogin.scss';

/*import libs*/
import React, {Component, Fragment} from 'react';
import  PropTypes from 'prop-types';
import $ from 'jquery';

/*User input*/

/********************************************************************
 * Code                                                             *
 ********************************************************************/

/**
 * @brief  Отрисовка бокового окна с ссылками на архив
 * @retval  Отрисованное окно со спискм ссылок
 */
export default class UserIsLogin extends Component {
    render() {
        const {user} = this.props;
        return (
            <div className="user-greating">
                {user.userpic ?
                    <img src="content/avatar.png" alt="user"/>:
                    <span className="user_without_avatar">{user.login[0]}</span>}
                <p className="user-logined">
                    Здравствуйте, <span>{user.login}</span>
                </p>
            </div>
        )
    }
}