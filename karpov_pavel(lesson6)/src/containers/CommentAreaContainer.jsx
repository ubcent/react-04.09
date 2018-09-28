import React, { PureComponent } from 'react';

import CommentArea from 'components/CommentArea';
import MessageItem from 'containers/MessageItemContainer';

export default class CommentAreaContainer extends PureComponent {

    render() { 
        const { comments } = this.props;
        const messageRend = comments.map((comment, idx) => {
            return (<MessageItem key={idx} text={comment.body} type={comment.type} />)         
        });      
        return (  
            <CommentArea messageRend={messageRend} />       
        );
    }
}
