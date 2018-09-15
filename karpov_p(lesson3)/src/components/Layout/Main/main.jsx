import './main.css'

import React, { Component } from 'react';
import classNames from 'classnames';

export default class Main extends Component {

    render() {
        const { children } = this.props;
        const mainClass = classNames ('main');
        return (
            <main className = {mainClass}>{ children }</main>
        );
    }
}