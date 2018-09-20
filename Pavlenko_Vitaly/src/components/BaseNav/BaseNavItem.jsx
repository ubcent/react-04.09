import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class BaseNavItem extends PureComponent {

    static defaultProps = {
        id: null,
        title: '',
        href: '/',
    };

    render() {
        const { id, title, href } = this.props;

        return (
            <Link className="base-nav__item" to={href} id={id}>{ title }</Link>
        );
    }
}