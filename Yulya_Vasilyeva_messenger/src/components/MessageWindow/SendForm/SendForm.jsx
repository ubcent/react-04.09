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
        const { userMessage } = this.state;
        const url = 'http://127.0.0.1:3000/chat';
        fetch(url, {
            method: 'post',
            headers: {  
                "Content-type": "application/json"  
              },
              body: JSON.stringify({
                user: 'right',
                message: userMessage,
                data: '01-02-2018'
              })
        })
        .then(resp => resp.json())
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