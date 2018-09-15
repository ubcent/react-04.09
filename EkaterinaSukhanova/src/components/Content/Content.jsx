import './Content.css';

import React, { Component } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Content extends Component {
    static propTypes = {
        size: PropTypes.oneOf(['small', 'middle', 'big']),
    };

    static defaultProps = {
        size: 'middle',
    };

    render() {
        const { size, children } = this.props;
        const contentClasses = classNames('content', {
            'content-small': size === 'small',
            'content-middle': size === 'middle',
            'content-big': size === 'big'
        });

        return(
            <div className={contentClasses}>
                <div>
                    {children}
                </div>
            </div>
        );
    }
}