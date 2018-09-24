import './Message.scss';

import React from 'react';
import classNames from 'classnames';

export default function Message(props) {
    const {body, self} = props;

    const messageClasses = classNames('message', {
        'message_self': self
    });

    return (
        <div className={messageClasses}>
            <div className="message__inner">
                {body}
            </div>
        </div>
    );
}