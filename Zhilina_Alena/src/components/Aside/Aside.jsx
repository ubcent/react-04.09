import './Aside.css'

import React, { PureComponent} from 'react';

import Search from 'components/Search/index';
import Login from 'components/Login/index';
import Categories from 'components/Categories/index';

export default class Aside extends PureComponent{
    render(){
        return(
            <div className="aside-content">
                <Search />
                <Login />
                <Categories />
            </div>
        )
    }
}