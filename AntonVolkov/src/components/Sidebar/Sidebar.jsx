import './Sidebar.scss';

import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        const { children } = this.props;
        return (
            <aside className='sidebar'>
                {children}
            </aside>
        );
    }
}