import './CommentArea.css';

import React, {Component} from 'react';

import classNames from 'classnames';

import MessageItem from 'components/MessageItem';

class CommentArea extends Component {
    render() {
        const comAreaStyles = classNames('comment-area');
        return(            
            <div className={comAreaStyles}>
                <MessageItem />
            </div>
        )
    }
}

export default CommentArea;