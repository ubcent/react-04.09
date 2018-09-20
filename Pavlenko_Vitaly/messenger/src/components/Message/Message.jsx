import './Message.scss';

import React, { PureComponent } from 'react';
import classNames from "classnames";

export default class Message extends PureComponent {

    render() {
        const { body, self } = this.props;

        const messageClasses = classNames('message', {
            'message_self': self
        });

        return (
            <div className={messageClasses}>
                <div className="message__inner">
                    { body }
                </div>
            </div>
        );
    }
}