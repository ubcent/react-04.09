import './Header.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Компонент принимает объект со свойствами:
// brand - объект заголовка навбара со свойствами
//      title - заголовок и
//      href - ссылка
// items - массив объектов меню
export default class Header extends Component {
    static defaultProps = {
        brand: {
            href: '#',
            title: 'title'
        },
        items: []
    };

    static propTypes = {
        brand: PropTypes.shape({
            href: PropTypes.string,
            title: PropTypes.string,
        }),
        items: PropTypes.arrayOf(PropTypes.string),
    };

    render(){
        const { brand, items } = this.props;
        const list = items.map( (item, index) => {
            const liClass = (index === 0) ? 'nav-item active' : 'nav-item';
            return <li className={liClass}>
                <a className='nav-link'
                   href={item.href}>{item.title}
                </a>
            </li>
        });
        return <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
            <div className='container'>
                <a className='navbar-brand' href={brand.href}>{brand.title}</a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive'
                        aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarResponsive'>
                    <ul className='navbar-nav ml-auto'>
                        {list}
                    </ul>
                </div>
            </div>
        </nav>
    }
}