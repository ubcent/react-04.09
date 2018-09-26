import './Main.css'

import React, { Component } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

//собственные модули

export default class Main extends Component {

    render() {
        const { size, children } = this.props;
        const mainClasses = ClassNames('main', {
            'main-small': size === 'small',
            'main-big': size === 'big',
        });

        return (
                <main className={mainClasses}>
                    {children}
                </main>
        );
    }
}