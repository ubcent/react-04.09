import './CommentArea.css';

import React, { PureComponent } from 'react';

export default class CommentArea extends PureComponent {

    render() {      
        const { messageRend } = this.props;

        return(            
            <div className="comment-area">
                {messageRend} 
            </div>
        )
    }
}