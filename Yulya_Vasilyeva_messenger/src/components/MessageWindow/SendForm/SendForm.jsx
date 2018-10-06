//импортируем пользовательские стили
import './SendForm.scss';

//импорт React
import React, { PureComponent } from 'react';

export default class SendForm extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            userMessage: '',
        }
    }

    //изменение формы с сообщением
    changeInput = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value,
        });
    }

    sendMessage = () => {
        
    }

    render() {
        return (
            <form action="#" className="send-form">
                <textarea onChange={this.changeInput} id="message" name="userMessage" className="send-message"></textarea>
                <input onClick={this.sendMessage} type="submit" className="send-button" value="Отправить"/>
            </form>
        );
    }
}