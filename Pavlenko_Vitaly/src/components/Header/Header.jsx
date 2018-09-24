import './Header.scss';

import React from 'react';

import Logo from 'components/Logo';
import BaseNav from 'components/BaseNav';

export default function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Logo/>
                    <BaseNav items={props.links}/>
                </div>
            </div>
        </header>
    );
}