//импортируем пользовательские стили
import './OpenUserChat.scss';
import UserPic from './img/user-0987.png';
import ArrowBack from './img/arrow-back.svg';

//импорт React
import React, { PureComponent } from 'react';

export default class OpenUserChat extends PureComponent {
    render() {
        return (
            <div className="open-user">
                <div className="arrow-back">
                    <img className="arrow-back-img" src={ArrowBack} alt="назад" title="вернуться к списку чатов"/>
                </div>
                <div className="user-info">
                    <img className="user-pic" src={UserPic} alt="Ирэн" />
                    <span className="user-name">Ирэн</span>
                </div>
            </div>
        );
    }
}