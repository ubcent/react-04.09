import './CommentForm.css';

import React, { PureComponent } from 'react';
import { sendComments } from 'actions/comments';
import {connect} from 'react-redux';

class CommentForm extends PureComponent{
    constructor(props) {
        super(props);

        this.state = {
            text:'',
            userId:'5bb3bbc4e7179a1193d942c4',
        };
    }

    handleSubmit = (event) => {

        event.preventDefault();

        const comment = {
            idPost: this.props.idArticle,
            idUser: this.state.userId,
            text:this.state.text
        };
        this.props.sendComments(comment);
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };


    render(){
        const { text } = this.state;

        return(
           <div className = "form-comment-wrap">
               <span className = "form-comment-wrap__title">SEND COMMENT</span>
               <form className = "form-comment">
                   <label className = "form-comment__label" htmlFor="text">Comment</label>
                   <textarea className = "form-comment__input" name="text" rows="10" onChange={this.handleChange} value={text}></textarea>
                   <button className="button" onClick={this.handleSubmit}>Send!</button>
               </form>
           </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...props
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        sendComments: (comment) => sendComments(dispatch)(comment)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);