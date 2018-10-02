import './MessageItem.css';

import React, { PureComponent } from 'react';

import classNames from 'classnames';

export default class MessageItem extends PureComponent {
        
    render() {
        const{ text, type } = this.props;
        const messageStyles = classNames('message',  {
            'message-guest': type === 'guest',
            'message-my': type === 'me',
        });
        const commentWrapStyles = classNames('comm-wrap', {
            'wrap-left': type === 'guest',
            'wrap-right': type === 'me',
        });             
        
        return(
            <div className={commentWrapStyles}>
                <div className={messageStyles}>{text}</div>            
            </div>            
        )
    }
}