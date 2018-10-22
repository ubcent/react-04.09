import './CommentsForm.css';

import React, {PureComponent} from 'react';
import classNames from 'classnames';


export default class CommentsForm extends PureComponent {
    render(){
        const {name, body, handleChange, handleClick} = this.props;
        return (
            <div className="comments-form">
                <input type="text" name="name" onChange={handleChange} value={name} placeholder="Your name" className="comments-form-author"/><br />
                <textarea name="body" onChange={handleChange} value={body} placeholder="Your message" className="comments-form-message"/><br />
                <button onClick={handleClick}>Add a comment</button>
            </div>
        );
    }
}