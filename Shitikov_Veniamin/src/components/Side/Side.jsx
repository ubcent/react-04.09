import './Side.css';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//Компонент принимает на вход
//  title - заголовок
//  content - контент виджета
export default class Side extends PureComponent {
    constructor(props) {
        super(props);

    }

    static defaultProps = {
        title: 'Side',
        content: 'Side content',
    };

    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.any,
    };

    render() {
        const { title, content } = this.props;

        return <div className='card my-4'>
            <h5 className='card-header'>{title}</h5>
            <div className='card-body'>{content}</div>
        </div>
    }
}

