import './Chathead.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Компонент заголовка чата.
//Принимает на вход заголовок
export default class Chathead extends Component{
    constructor(props){
        super(props);
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    static defaultProps = {
        title: 'My Chat',
    };

    render(){
        const { title } = this.props;
        return <div className='chathead'>{title}</div>
    }
}