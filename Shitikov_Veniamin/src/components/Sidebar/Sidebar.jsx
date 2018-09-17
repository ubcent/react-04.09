import React, { Component } from 'react';
import Search from '../Search/Search';
import Categories from '../Categories/Categories';
import Side from '../Side/Side';

// Компонент принимает объект со свойствами:
// categories - массив объектов категорий
// side - объект бокового виджета
export default class Sidebar extends Component {

    static defaultProps = {
        categories: [],
        side: {},
    };

    render(){
        return <div className='col-md-4'>

        {/*<!-- Search Widget -->*/}
        <Search />

        {/*<!-- Categories Widget -->*/}
        <Categories categories={[]} />


        {/*<!-- Side Widget -->*/}
        <Side />



    </div>
    }
}

