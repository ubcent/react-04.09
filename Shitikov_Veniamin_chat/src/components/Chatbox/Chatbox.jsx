import './Chatbox.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from "components/Message/Message";

//Компонент сообщений чата.
//Принимает на вход массив сообщений
export default class Chatbox extends Component{
    constructor(props){
        super(props);
    }

    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.oneOf(['in', 'out']),
            message: PropTypes.string.isRequired,
        }))
    };

    static defaultProps = {
        items: [],
    };

    render(){
        const { items } = this.props;
        return <div className="chatbox">
            <ul>
                {items.map( (item) => {
                    return <Message type={item.type} message={item.message} id={item.id}/>
                })}
            </ul>
        </div>
    }
}






