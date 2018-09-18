import './CategoriesList.scss';

import React, {Component} from 'react';

export default class Posts extends Component {

    render() {
        const { list } = this.props;

        return (
            <ul className="categories-list post-card__cat">
                { list.map((item, idx) => (
                    <li key={idx} className="categories-list__item">
                        <a href="#" className="link categories-list__link">{item}</a>
                    </li>
                )) }
            </ul>
        );
    }
}