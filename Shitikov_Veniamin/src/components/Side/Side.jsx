import './Side.css';

import React, { Component } from 'react';

export default class Side extends Component {
    constructor(props) {
        super(props);

    }

    static defaultProps = {
        title: 'Side',
        content: 'Side content',
    }

    render() {
        const { title, content } = this.props;

        return <div className='card my-4'>
            <h5 className='card-header'>{title}</h5>
            <div className='card-body'>{content}</div>
        </div>
    }
}

