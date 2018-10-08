import './CommentForm.css';

import React, { PureComponent } from 'react';

import classNames from 'classnames';

class CommentForm extends PureComponent {
    render() {
        const { text, onHandleChange, onAddComment, isDisabled } = this.props;

        const formStyles = classNames('form');
        const textareaStyles = classNames('form__text-area');
        const formbtnStyles = classNames('form__sub-btn', {
            'form__sub-btn--disabled': isDisabled === "disabled",
            'form__sub-btn--active': isDisabled === false,
        });       

        return(
            <form action="#" className={formStyles}>
                <textarea name="text" onChange={onHandleChange} className={textareaStyles} placeholder="..." value={text} autoFocus></textarea>
                <input onClick={onAddComment} className={formbtnStyles} type="submit" disabled={isDisabled} />                          
            </form>
        )
    }
}

export default CommentForm;