import './CommentForm.css';

import React, { PureComponent } from 'react';

export default class CommentForm extends PureComponent{
    constructor(props){
        super(props);

    }

    handleChange = (event) => {
        this.setState({ value: event.target.value})
    };

    handleSubmit = () => {
        console.log(this.state.value);
        //здесь должна быть отправка комментария на сервер
    };

    render(){
        return <div className="card my-4">
            <h5 className="card-header">Leave a Comment:</h5>
            <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <textarea onChange={this.handleChange} className="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    }
}


