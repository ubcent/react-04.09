//пользовательские стили
import './MessageWindow.scss';

//импорт React
import React, { PureComponent } from 'react';

//импортируем пользовательские компоненты
import OpenUserChat from './OpenUserChat/';//открытый пользователь
import MessageContainer from 'containers/MessageContainer';//сообщения
import SendForm from './SendForm/';//форма отправки сообщения

export default class MessageWindow extends PureComponent {
    render() {
        return (
            <div className="message-window">
                <OpenUserChat />
                <MessageContainer />
                <SendForm />
            </div>
        );
    }
}