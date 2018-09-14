import './BaseNav.scss';

import React, {Component} from 'react';

import BaseNavItem from 'components/BaseNavItem';
import Login from 'components/Login';

export default class BaseNav extends Component {

    render() {
        const { items } = this.props;

        return (
            <nav className="base-nav">
                { items.map((item) => <BaseNavItem href={item.href} id={item.id} title={item.title} key={item.id}/>) }
                <Login/>
            </nav>
        );
    }
}