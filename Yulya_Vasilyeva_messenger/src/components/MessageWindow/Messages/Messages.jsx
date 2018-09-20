//импортируем пользовательские стили
import './Messages.scss';

//импорт React
import React, { Component } from 'react';

export default class Messages extends Component {
    render() {
        return (
            <div className="user-messages">
                <div className="msg-left">Привет!</div>
                <div className="msg-right">Привет! =)</div>
                <div className="msg-left">Как дела?</div>
                <div className="msg-right">Дождливо</div>
            </div>
        );
    }
}