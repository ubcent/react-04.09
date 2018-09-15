import './Footer.css';

import React, { Component } from 'react';

// Компонент принимает объект со свойствами:
// content - контент для футора
export default class Footer extends Component{
    static defaultProps = {
        content: '© ' + new Date().getFullYear()
    };

    render(){
        return <footer className="footer">
            <div className="container">
                <span className="text-muted">{this.props.content}</span>
            </div>
        </footer>
    }
}

