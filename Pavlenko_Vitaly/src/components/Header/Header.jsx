import './Header.scss';

import React, {Component} from 'react';
//import PropTypes from 'prop-types';

import Logo from 'components/Logo';
import BaseNav from 'components/BaseNav';

const items = [
    {
        "id": "blog",
        "title": "Блог",
        "href": "#",
    },
    {
        "id": "store",
        "title": "Магазин",
        "href": "#",
    },
];

export default class Header extends Component {

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