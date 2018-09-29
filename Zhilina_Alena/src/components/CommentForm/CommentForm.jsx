import './CommentForm.css';

import React, { PureComponent } from 'react';

export default class CommentForm extends PureComponent{
    constructor(props) {
        super(props);

        this.state = {
            text:'',
            id:'20',
            userId:'3',
            postId:'1',
            user:{
                "id":"3",
                "gender":"female",
                "firstName":"Melanie",
                "lastName":"Ward",
                "email":"melanie.ward19@example.com"
            }
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleClick = (event) => {
        const { onSend } = this.props;
        event.preventDefault();

        onSend(this.state);
    };

    render(){

        const { text } = this.state;

        return(
           <div className = "form-comment-wrap">
               <span className = "form-comment-wrap__title">SEND COMMENT</span>
               <form className = "form-comment">
                   <label className = "form-comment__label" htmlFor="text">Comment</label>
                   <textarea className = "form-comment__input" name="text" rows="10" onChange={this.handleChange} value={text}></textarea>
                   <button className="button" onClick={this.handleClick}>Send!</button>
               </form>
           </div>
        );
    }
}