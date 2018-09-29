//импортируем пользовательские стили
import './Options.scss';

//импорт React
import React, { PureComponent } from 'react';

export default class Options extends PureComponent {
    render() {
        return (
            <div className="message-options">
                опции чата
            </div>
        );
    }
}