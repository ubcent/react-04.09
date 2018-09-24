//импорт пользовательских стилей для редактирования авторизации
import './SignIn.scss';

//импорт React
import React, { PureComponent, Fragment } from 'react';
import { //импорт формы из Bootstrap
    Button,
    Form,
    Label,
    Input,
    FormGroup,
    Modal,
    ModalBody,
    Alert,
} from 'reactstrap';

export default class SignIn extends PureComponent {
    render() {
        const { modal, checkUser, changeInput, toggle } = this.props;

        return (
            <Fragment>
                <Form className="signin">
                    <h4>Кабинет пользователя</h4>
                    <FormGroup>
                        <Label for="login">Логин</Label>
                        <Input onChange={changeInput} type="text" name="userLogin" id="login" placeholder="vasya01" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="pass">Пароль</Label>
                        <Input onChange={changeInput} type="password" name="userPass" id="pass" placeholder="123" />
                    </FormGroup>
                    <Button onClick={toggle} color="secondary" block className="btn-signin">Войти</Button>
                </Form>
                <Button color="info" block >Регистрация</Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalBody>
                        <Alert color={checkUser.classAlert}>
                            <h3 className="text-center">{checkUser.textAlert}</h3>
                        </Alert>
                        <Button onClick={toggle} color="warning" block>Спасибо</Button>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}