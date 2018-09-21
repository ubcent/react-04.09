import './Header.css'

import React, { PureComponent } from 'react';

import Menu from 'components/Menu';

export default class Header extends PureComponent{

    onSend = (value) =>{
        this.props.updatePage(value);
    };

    render(){
        return(
            <header className="header">
                <Menu onSend = { this.onSend } />
            </header>
        )
    }
}