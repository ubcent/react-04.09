import './Footer.css'

import React, { Component } from 'react';
import classNames from 'classnames';

export default class Footer extends Component{

    render(){
        const footerClasses = classNames('footer');

        return(
            <footer className={footerClasses}>
                <span>Copyrights (c) Fikristudio 2014</span>
            </footer>
        );
    }
}