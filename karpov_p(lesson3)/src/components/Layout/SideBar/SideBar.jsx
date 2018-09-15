import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Layout extends Component {
    static propTypes = {
        itemsList: PropTypes.arrayOf(PropTypes.string),
    }
    static defaultProps = {
        itemsList: [],
    };
    render() {
        const { itemsList } = this.props;
        const groupClasses = classNames ('list-group', 'w-25', 'float-right', 'position-sticky');
        const itemClasses = classNames ('list-group-item', 'list-group-item-action');
        return (
            <div className = {groupClasses}>
            {itemsList.map((item, idx) => <a href="#" className = {itemClasses} key={idx}>{item}</a>)}
            </div>
        );
    }
}