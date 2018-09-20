import './Header.scss';

import React, { PureComponent } from 'react';
//import PropTypes from 'prop-types';

import Logo from 'components/Logo';
import BaseNav from 'components/BaseNav';

const items = [
    {
        "id": "home",
        "title": "Главная",
        "href": "/",
    },
    {
        "id": "blog",
        "title": "Блог",
        "href": "/blog",
    },
    {
        "id": "comments",
        "title": "Комментарии",
        "href": "/comments",
    },
];

export default class Header extends PureComponent {

    // static propTypes = {
    //     size: PropTypes.oneOf(['small', 'big']),
    // };

    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <Logo/>
                        <BaseNav items={items}/>
                    </div>
                </div>
            </header>
        );
    }
}