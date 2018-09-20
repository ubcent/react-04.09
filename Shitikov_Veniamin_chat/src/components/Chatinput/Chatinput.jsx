import './Chatinput.css';

import React, { Component } from 'react';
import classNames from 'classnames';

//Компонент формы ввода.
//Принимает на вход value функцию обработчик сабмита
export default class Chatinput extends Component{
    constructor(props){
        super(props);

        this.state = {
            value: ''
        }
    }

    static defaultProps = {
        handleSubmit: console.log,
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        })
    };

    render(){
        const { handleSubmit } = this.props;

        return <div className="form">
            <textarea onChange={this.handleChange} name="input">{this.state.value}</textarea>
            <button onClick={()=> handleSubmit(this.state.value)}>send</button>
        </div>
    }
}