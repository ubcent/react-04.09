import './Header.css';

import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Navigation from 'components/Layout/Header/Navigation'

const navList = ['Главная', 'Заглавная', 'И, конечно, самая главная'];

export default class Header extends Component {
    static propTypes = {
        size: PropTypes.oneOf(['small', 'big']),
        creators: PropTypes.arrayOf(PropTypes.string),
    }
    static defaultProps = {
        size: 'small',
        creators: [],
    };
    render() {
        const { size, children, creators } = this.props;
        const headerClasses = classNames('header', {
            'header-small': size === 'small',
            'header-big': size === 'big',
        });

        return (
            <Fragment>
                <header>
                    <Navigation navList = {navList}  /> 
                </header>           
            </Fragment>
        );
    }
}


