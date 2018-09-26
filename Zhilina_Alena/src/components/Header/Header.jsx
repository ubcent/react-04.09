import './Header.css'

import React, { PureComponent } from 'react';

import Menu from 'components/Menu';

export default class Header extends PureComponent{
    render(){
        return(
            <header className="header">
                <Menu />
            </header>
        )
    }
}