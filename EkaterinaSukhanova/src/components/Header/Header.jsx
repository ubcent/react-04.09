import './Header.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Header extends Component {
    static propTypes = {
        size: PropTypes.oneOf(['small', 'big']),
        creators: PropTypes.arrayOf(PropTypes.string)
    };

    static defaultProps = {
        size: 'small',
        creators: []
    };

    render() {
        const { size, children, creators } = this.props;
        const headerClasses = classNames('header', {
            'header-small': size === 'small',
            'header-big': size === 'big'
        });

        return(
            <header className={headerClasses}>
                <h1>The Blog</h1>
                <p>Example template of creating blog</p>
            </header>
        );
    }
}