//импортируем пользовательские стили
import './Subscr.css';

//импортируем React
import React, { Component } from 'react';
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
export default class Subscr extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    
    render() {
        //по нажатию на кнопку появлятеся модальное окно с формой для ввода email
        return (
            <div>
                <Button onClick={this.toggle} color="warning" className="subscr">Подписаться на новости</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>      
                        <Form>
                            <Label for="email">Введите свой электронный адрес и получайте свежие новости раз в неделю.</Label>
                            <Input type="email" name="user-email" id="email" placeholder="vasya@mail.ru" />
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="warning" onClick={this.toggle}>Подписаться</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
