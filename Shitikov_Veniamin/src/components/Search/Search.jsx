import './Search.css';

import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value});
    }

    handleSubmit = () => {
        console.log(this.state.value);
        //здесь должна быть функция поиска
    }

    render(){
        return <div className='card my-4'>
        <h5 className='card-header'>Search</h5>
        <div className='card-body'>
            <div className='input-group'>
                <input type='text' onChange={this.handleChange} className='form-control' value={this.state.value} />
                <span className='input-group-btn'>
                    <button onClick={this.handleSubmit} className='btn btn-secondary' type='button'>Go!</button>
                </span>
            </div>
        </div>
    </div>
    }
}

