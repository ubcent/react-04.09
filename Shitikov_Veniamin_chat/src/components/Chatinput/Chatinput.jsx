import './Chatinput.css';

import React, { PureComponent } from 'react';
import {connect} from "react-redux";
import {sendMessage} from "../../actions/messages";

//Компонент формы ввода.
//Принимает на вход value функцию обработчик сабмита
class Chatinput extends PureComponent{
    constructor(props){
        super(props);

        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        })
    };

    sendMessage = (event) => {
        event.preventDefault();
        this.props.sendMessage(this.state.value);
        this.setState({value: ''});
    };

    render(){
        return <div className='form'>
            <textarea onChange={this.handleChange} name='input' value={this.state.value} />
            <button onClick={this.sendMessage}>send</button>
        </div>
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        sendMessage: sendMessage(dispatch),
    }
}

export default connect(null, mapDispatchToProps)(Chatinput);