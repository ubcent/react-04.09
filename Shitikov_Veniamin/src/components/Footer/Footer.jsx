import './Footer.css';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Компонент принимает объект со свойствами:
// content - контент для футора
export default class Footer extends PureComponent{
    static defaultProps = {
        content: 'Copyright © Your Website 2018',
    };

    render(){
        return <footer className='py-5 bg-dark'>
            <div className='container'>
                <p className='m-0 text-center text-white'>{this.props.content}</p>
            </div>
        </footer>
    }
}

