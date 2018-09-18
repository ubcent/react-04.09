import './CommentForm.css';

import React, {Component} from 'react';

import classNames from 'classnames';

class CommentForm extends Component {

    addComment() {
        console.log('comment')
    }

    render() {
        const formStyles = classNames('form');
        const textareaStyles = classNames('form__text-area');
        const formbtnStyles = classNames('form__sub-btn');
        return(
            <form action="#" className={formStyles}>
                <textarea className={textareaStyles} placeholder="..." autoFocus></textarea>
                <input onClick={this.addComment} className={formbtnStyles} type="submit" />            
            </form>
        )
    }
}

export default CommentForm;