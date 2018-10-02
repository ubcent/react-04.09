import './Header.css'

import React, { PureComponent } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { Jumbotron } from 'reactstrap';

//собственные модули

export default class Header extends PureComponent {
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
        const { size, children } = this.props;
        const headerClasses = ClassNames('header', {
            'header-small': size === 'small',
            'header-big': size === 'big',
        });

        return (
                <header className={headerClasses}>
                    <Jumbotron>
                        <h1 className="display-3">Hello, {children}!</h1>
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    </Jumbotron>
                </header>
        );
    }
}