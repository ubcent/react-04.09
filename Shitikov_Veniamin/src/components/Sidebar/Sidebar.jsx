import './Sidebar.css';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Search from '../Search';
import Categories from '../Categories';
import Side from '../Side';

// Компонент принимает объект со свойствами:
// categories - массив объектов категорий
// side - объект бокового виджета
export default class Sidebar extends PureComponent {
    static defaultProps = {
        categories: [],
        side: {},
    };

    static propTypes = {
        categories: PropTypes.array,
        side: PropTypes.object,
    };

    render(){
        return <div className='col-md-4'>

        {/*<!-- Search Widget -->*/}
        <Search />

        {/*<!-- Categories Widget -->*/}
        <Categories categories={this.props.categories} />


        {/*<!-- Side Widget -->*/}
        <Side />



    </div>
    }
}

