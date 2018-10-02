import React, { PureComponent } from 'react';

import CommentForm from 'components/CommentForm';

export default class CommentFormContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            text: '', 
            isDisabled: 'disabled',
        };   
    }
  
    addComment = (event) => {            
        event.preventDefault(); 
        const { id, onGetApi } = this.props;
        fetch(`http://localhost:3001/posts/${id}/comments`, {
            method: 'POST',
            body: JSON.stringify({
                body: this.state.text,
                type: 'me',
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(() => onGetApi(id))
        .then(() => this.setState({
            text: '',
            isDisabled: "disabled",
        })); 
    } 
        
    handleChange = (event) => {
        this.setState({        
            [event.target.name]: event.target.value,
        });
        (event.target.value !== "" ) ? this.setState({isDisabled: false}) : this.setState({isDisabled: 'disabled'});              
    }

    render() {
        const{ text, isDisabled } = this.state;

        return (  
            <CommentForm 
            onHandleChange={this.handleChange} 
            onAddComment={this.addComment} 
            text={text} 
            isDisabled={isDisabled} />       
        );
    }
}