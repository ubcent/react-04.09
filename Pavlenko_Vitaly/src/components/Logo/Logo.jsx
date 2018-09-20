import './Logo.scss';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends PureComponent {

    render() {

        return (
            <Link to="/" className="logo header__logo">MY BLOG</Link>
        );
    }
}