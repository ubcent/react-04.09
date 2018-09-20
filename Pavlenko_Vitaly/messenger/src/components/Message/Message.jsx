import './Message.scss';

import React, {Component} from 'react';
import classNames from "classnames";

export default class Message extends Component {

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