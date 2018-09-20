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
        const { modal, checkUser } = this.state;//состояние модального окна
        const { className, backdrop } = this.props;

        return (
            <Fragment>
                <Form className="signin">
                    <h4>Кабинет пользователя</h4>
                    <FormGroup>
                        <Label for="login">Логин</Label>
                        <Input onChange={this.changeInput} type="text" name="userLogin" id="login" placeholder="vasya01" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="pass">Пароль</Label>
                        <Input onChange={this.changeInput} type="password" name="userPass" id="pass" placeholder="123" />
                    </FormGroup>
                    <Button onClick={this.toggle} color="secondary" block className="btn-signin">Войти</Button>
                </Form>
                <Button color="info" block >Регистрация</Button>
                <Modal isOpen={modal} toggle={this.toggle} className={className} backdrop={backdrop}>
                    <ModalBody>
                        <Alert color={checkUser.classAlert}>
                            <h3 className="text-center">{checkUser.textAlert}</h3>
                        </Alert>
                        <Button onClick={this.toggle} color="warning" block>Спасибо</Button>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}