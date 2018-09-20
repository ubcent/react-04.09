//импортируем пользовательские стили
import './SendForm.scss';

//импорт React
import React, { PureComponent } from 'react';

export default class SendForm extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            userMessage: '',
            valueText: '',
        }
    }

    //изменение формы с сообщением
    changeInput = (ev) => {
        const { userMessage } = this.state;
        this.setState({
            [ev.target.name]: ev.target.value,
        });
    }

    sendMessage = () => {
        const { userMessage, valueText } = this.state;
        this.setState({
            valueText: '',
        });
    }

    render() {
        const { dataMsg } = this.props;
        return (
            <form action="#" className="send-form">
                <textarea id="message" name="userMessage" className="send-message" value={this.valueText}></textarea>
                <input onClick={this.sendMessage} type="submit" className="send-button" value="Отправить"/>
            </form>
        );
    }
}