//импорт React
import React, { PureComponent, Fragment } from 'react';

import SignIn from 'components/SignIn';

export default class SignInContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            userLogin: '',
            userPass: '',
            checkUser: {
                classAlert: '',
                textAlert: '',
            },
            alertText: '',
        };
    }

    //изменяем значение поля Логин
    changeInput = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value,
        });
    }

    //отображаем / скрываем модальное окно
    toggle = () => {
        const { modal, userLogin, userPass } = this.state;
        //проверяем логин и пароль пользователя, при успешном входе меняется внешний вид сообщения
        const checkUserState = (userLogin === 'vasya01' && userPass === '123') ?
            { classAlert: 'light', textAlert: 'Вы успешно авторизованы!' } :
            { classAlert: 'danger', textAlert: 'Увы, неправильно введен логин или пароль!' };

        this.setState({
            modal: !modal,
            checkUser: checkUserState,
        });
    }

    render() {
        const { modal, checkUser } = this.state; //состояние модального окна
        return (
            <SignIn modal={modal} checkUser={checkUser} toggle={this.toggle} changeInput={this.changeInput}/>
        );
    }
}