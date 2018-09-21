import './Categories.css'

import React, { PureComponent} from 'react';

export default class Categories extends PureComponent{
    render(){
        return(
            <div className="aside-block-wrap">
                <span className="block-title">Categories</span>
                <div className="category-box">
                    <ul className="category-list">
                        <li className="category-list__item"><a className="link link_main" href="#">SPOTLIGHT</a></li>
                        <li className="category-list__item"><a className="link link_main" href="#">LOREM</a></li>
                        <li className="category-list__item"><a className="link link_main" href="#">REVIEW</a></li>
                        <li className="category-list__item"><a className="link link_main" href="#">SKY</a></li>
                        <li className="category-list__item"><a className="link link_main" href="#">BLUE</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}