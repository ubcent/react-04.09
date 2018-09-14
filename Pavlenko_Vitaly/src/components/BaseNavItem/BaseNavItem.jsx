import './BaseNavItem.scss';

import React, {Component} from 'react';

export default class BaseNavItem extends Component {

    render() {
        const { id, title, href } = this.props;

        return (
            <a className="base-nav__item" href={href} id={id}>{title}</a>
        );
    }
}