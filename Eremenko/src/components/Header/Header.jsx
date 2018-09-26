import './Header.css'

import React, { Component } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

//собственные модули

export default class Header extends Component {
    // Uncaught TypeError: _propTypes2.default.string.oneOf is not a function


    static propTypes = {
        size: PropTypes.oneOf(['small', 'big']),
        categories: PropTypes.arrayOf(PropTypes.string),
    }


    // передаваемые значения по умолчанию
    static defaultProps = {
        size: 'small',
        categories: [],
    }

    render() {
        const { size, categories, children } = this.props;
        const headerClasses = ClassNames('header', {
            'header-small': size === 'small',
            'header-big': size === 'big',
        });

        return (
                <header className={headerClasses}>
                    <ul>{categories.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
                </header>
        );
    }
}