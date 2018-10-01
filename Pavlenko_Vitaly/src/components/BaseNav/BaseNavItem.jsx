import React from 'react';
import {Link} from 'react-router-dom';

export default function BaseNavItem(props) {
    const {id, title, href} = props;

    return (
        <Link className="base-nav__item" to={href} id={id}>{title}</Link>
    );
}