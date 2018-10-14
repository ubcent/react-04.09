import './categoryNav.scss';

import React, {PureComponent} from 'react';

export default class CategoryNav extends PureComponent {

    render() {
        const {categories, CategoryClick} = this.props;
        return (
            <div className={"container"}>
                <nav className="categoryNavs">
                    <ul className="nav nav-pills">
                        <li className={"nav-item"} >
                            <span id="AllCategories"
                                  className={"nav-link " + (categories.active === '0' ? 'active' :'test')}
                                  onClick={CategoryClick}>All</span>
                        </li>
                        {categories.categories.map((category, index) => {
                            return <li className={"nav-item"} key={index}>
                                <span id={category._id}
                                      className={"nav-link " + (category._id === categories.active ? 'active':'')}
                                      onClick={CategoryClick}>{category.name}</span>
                            </li>;
                        })}
                    </ul>
                </nav>
            </div>
        );
    }
}
