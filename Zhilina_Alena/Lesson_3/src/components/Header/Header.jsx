import './Header.css';

import React, { Component } from 'react';
import classNames from 'classnames';

import Menu from 'components/Menu';

const items = ['Home', 'About', 'Category', 'Contact'];

export default class Header extends Component{

    render(){
        const headerClasses = classNames('header');

        return (
            <header className = {headerClasses}>
                <Menu items = {items}/>
            </header>
        );
    }
}