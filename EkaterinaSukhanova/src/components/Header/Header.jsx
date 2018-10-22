import './Header.css';

import React, {PureComponent} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default class Header extends PureComponent {
    static propTypes = {
        size: PropTypes.oneOf(['small', 'big']),
    };

    static defaultProps = {
        size: 'small',
    };

    render() {
        const {size, children} = this.props;

        const headerClasses = classNames('header', {
            'header-small': size === 'small',
            'header-big': size === 'big'
        });

        return (
            <header className={headerClasses}>
                <h1>The Blog</h1>
                <p>Example template of creating blog</p>

                <ul className="navigation">
                    {children.map((link, idx) => <li key={idx}>{link}</li>)}
                </ul>
            </header>
        );
    }
}