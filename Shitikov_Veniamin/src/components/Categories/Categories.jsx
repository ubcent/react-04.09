import './Categories.css';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//Компонент принимает массив объектов категорий
//  href - ссылка
//  title - заголовок
export default class Categories extends PureComponent {
    constructor(props){
        super(props);
    }

    static defaultProps = {
        categories: [],
    };

    static propTypes = {
        categories: PropTypes.array,
    };

    render(){
        const { categories } = this.props;
        const list = categories.map( (item) => {
            return <li key={item.title}>
            <a href={item.href}>{item.title}</a>
        </li>
        });
        return <div className='card my-4'>
        <h5 className='card-header'>Categories</h5>
        <div className='card-body'>
            <div className='row'>
                <div className='col-lg-6'>
                    <ul className='list-unstyled mb-0'>
                        {list}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    }

}

