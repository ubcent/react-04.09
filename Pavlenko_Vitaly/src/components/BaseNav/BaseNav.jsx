import './BaseNav.scss';

import React from 'react';

import BaseNavItem from './BaseNavItem';

export default function BaseNav(props) {
    return (
        <nav className="base-nav">
            {
                props.items.map((item) =>
                    <BaseNavItem key={item.id} href={item.href} id={item.id} title={item.title}/>
                )
            }
        </nav>
    );
}