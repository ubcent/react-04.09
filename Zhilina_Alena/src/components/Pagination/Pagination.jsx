import './Pagination.css'

import React, { PureComponent} from 'react';

export default class Pagination extends PureComponent{
    render(){
        return(
            <div className="pagination-bar">
                <button className="button pagination-bar__button">Prev</button>
                <button className="button pagination-bar__button">Next</button>
            </div>
        )
    }
}