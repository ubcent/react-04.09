import './MessageItem.css';

import React, {Component} from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

class MessageItem extends Component {
    static propTypes = {
        type: PropTypes.oneOf(['guest', 'me']),        
    }
    static defaultProps = {
        type: 'guest',
        text: [],
    };

    render() {
        const { text, type } = this.props;
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
                <div className={messageStyles}>{this.props.text}</div>            
            </div>            
        )
    }
}

export default MessageItem;