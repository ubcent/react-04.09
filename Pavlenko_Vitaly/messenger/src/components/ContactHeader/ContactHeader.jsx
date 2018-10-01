import './ContactHeader.scss';

import React from 'react';

export default function ContactHeader(props) {
    return (
        <header className="contact-header">
            <div className="contact-header__img"></div>
            <h2 className="contact-header__name">{props.user}</h2>
        </header>
    );
}