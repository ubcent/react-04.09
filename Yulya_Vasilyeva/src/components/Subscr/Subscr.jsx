//импортируем пользовательские стили
import './Subscr.scss';

//импортируем React
import React, { PureComponent } from 'react';
//импорт компонентов Bootstrap для отрисовки кнопок и модального окна
import {
    Modal,
    ModalBody,
    ModalFooter,
    Form,
    Input,
    Label,
    Button
} from 'reactstrap';

/*компонент для окна подписки на новости, при нажати на кнопку
отображается модальное окно*/
export default class Subscr extends PureComponent {
    render() {
        const { modal, toggle } = this.props;
        return (
            <div>
                <Button onClick={toggle} color="warning" className="subscr">Подписаться на новости</Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalBody className="modal-text">
                        <Form>
                            <Label for="email">Введите свой электронный адрес и получайте свежие новости раз в неделю.</Label>
                            <Input type="email" name="user-email" id="email" placeholder="vasya@mail.ru" />
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="warning" onClick={toggle}>Подписаться</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
