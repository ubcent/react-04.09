import './Search.css'

import React, { PureComponent} from 'react';

export default class Search extends PureComponent{
    render(){
        return(
            <div className="aside-block-wrap">
                <span className="block-title">Search</span>
                <div className="form-box">
                    <form className="form-search" action="#" method="post">
                        <input className="form-search__input" type="text"/>
                        <button className="button">Go!</button>
                    </form>
                </div>
            </div>

        )
    }
}