import './ContactNav.scss';

import React, {Component} from 'react';

export default class ContactNav extends Component {

    render() {
        const { name } = this.props;

        return (
            <nav className="contact-nav messenger__contact-nav">
                <div className="contact-nav__img"></div>
                <h2 className="contact-nav__name">{ name }</h2>
            </nav>
        );
    }
}