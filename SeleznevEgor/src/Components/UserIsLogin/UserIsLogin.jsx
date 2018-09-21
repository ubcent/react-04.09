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
                <img src="content/avatar.png" alt="user"/>
                <p className="user-logined">
                    Здравствуйте, <span>{user.username}</span>
                </p>
            </div>
        )
    }
}