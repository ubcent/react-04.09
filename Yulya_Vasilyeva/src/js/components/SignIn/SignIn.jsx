//импорт пользовательских стилей для редактирования авторизации
import './SignIn.scss';

//импорт React
import React, { Component } from 'react';


import { //импорт формы из Bootstrap
    Button,
    Form,
    Label,
    Input,
    FormGroup
} from 'reactstrap';

export default class SignIn extends Component {
    render() {
        return (
            <Form className="signin">
            <h4>Кабинет пользователя</h4>
                <FormGroup>
                    <Label for="login">Логин</Label>
                    <Input type="text" name="user_login" id="login" placeholder="vasya01" />
                </FormGroup>
                <FormGroup>
                    <Label for="pass">Пароль</Label>
                    <Input type="password" name="user_pass" id="pass" placeholder="123" />
                </FormGroup>
                <Button color="secondary" block className="btn-signin">Войти</Button>

            </Form>
        );
    }
}