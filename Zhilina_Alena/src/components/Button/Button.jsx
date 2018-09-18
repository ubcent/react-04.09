import './Button.css'

import React, { Component } from 'react';
import classNames from 'classnames';

export default class Button extends Component{

    render(){
        const {name, parent} = this.props;

        const buttonClasses = classNames('button', `${parent}__button`);

        return(
            <a className = {buttonClasses} href="#">{name}</a>
        );
    }
}