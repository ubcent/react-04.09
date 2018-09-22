import './CommentArea.css';

import React, {PureComponent} from 'react';

import classNames from 'classnames';

import MessageItem from 'components/MessageItem';

class CommentArea extends PureComponent {

    
    render() {
        const comAreaStyles = classNames('comment-area');

        const messageRend = this.props.message.map((item, idx) => {
            return (<MessageItem key={idx} text={item.text} type={item.type}/>)         
        });
   
        return(            
            <div className={comAreaStyles}>
                {messageRend} 
            </div>
        )
    }
}

export default CommentArea;