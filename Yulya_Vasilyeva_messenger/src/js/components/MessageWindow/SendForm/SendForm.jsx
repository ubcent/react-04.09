//импортируем пользовательские стили
import './SendForm.scss';

//импорт React
import React, { Component } from 'react';

export default class SendForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            userMessage: '',
        }
    }

    sendMessage = () => {
        const { userMessage } = this.state;
        this.setState({
            userMessage: userMessage,
        });
    }

    render() {
        return (
            <form action="#" className="send-form">
                <textarea id="message" className="send-message"></textarea>
                <input onClick={this.sendMessage} type="submit" className="send-button" value="Отправить"/>
            </form>
        );
    }
}