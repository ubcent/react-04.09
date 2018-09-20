import './ContactHeader.scss';

import React, { PureComponent } from 'react';

export default class ContactHeader extends PureComponent {

    render() {
        const { name } = this.props;

        return (
            <header className="contact-header">
                <div className="contact-header__img"></div>
                <h2 className="contact-header__name">{ name }</h2>
            </header>
        );
    }
}