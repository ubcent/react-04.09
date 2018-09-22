import './MessageItem.css';

import React, {PureComponent} from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

class MessageItem extends PureComponent {
    static propTypes = {
        type: PropTypes.oneOf(['guest', 'me']),        
    }
    static defaultProps = {
        type: 'guest',
        text: [],
    };  

    componentDidMount() {
        const commArea = document.querySelector('.comment-area');
        commArea.scrollTo({
            top: commArea.scrollHeight,
            behavior: 'smooth'
        })
    } 
    

    render() {
        const{text, type} = this.props;
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

export default MessageItem;