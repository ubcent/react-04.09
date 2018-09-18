import './MessageItem.css';

import React, {Component} from 'react';

import classNames from 'classNames';

class MessageItem extends Component {
    render() {
        const messageStyles = classNames('message-guest', 'clearfix');
        return(
            
            <div>
                <div className={messageStyles}>What's up man how R U</div>
                <div className={messageStyles}>YO, MAN WAZUP</div>
                <div className={messageStyles}>WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZUP!!!!!</div>
            </div>
        )
    }
}

export default MessageItem;