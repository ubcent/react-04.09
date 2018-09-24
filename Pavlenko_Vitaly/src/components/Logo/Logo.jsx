import './Logo.scss';

import React from 'react';
import {Link} from 'react-router-dom';


export default function Logo() {
    return (
        <Link to="/" className="logo header__logo">MY BLOG</Link>
    );
}