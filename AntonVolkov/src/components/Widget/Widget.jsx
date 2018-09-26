import './Widget.scss';

import React, { Component } from 'react';


import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Widget extends Component {
    static propTypes = {
        title: PropTypes.string,
    };

    static defaultProps = {
        title: null,
    };

    render() {
        const { title, children } = this.props;
        const widgetClass = classNames('widget', {
           // 'header--fixed': fixed,
        });

        let $title = !title ? '' : (
                <header className="widget__title">
                    <h3>{title}</h3>
                </header>
            );

        return (
            <section className={widgetClass}>
                {$title}
                <div className="widget__content">
                    {children}
                </div>
            </section>
        );
    }
}