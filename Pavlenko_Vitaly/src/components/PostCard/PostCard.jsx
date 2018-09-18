import './PostCard.scss';

import React, {Component} from 'react';

import CategoriesList from 'components/CategoriesList';

export default class PostCard extends Component {

    render() {
        const { id, title, body, categories, link } = this.props;

        return (
            <div className="col-md-6">
                <article className="post-card">
                    <a href={link} className="post-card__img-link"></a>
                    <div className="post-card__body">
                        <CategoriesList list={categories}/>
                        <h2 className="post-card__title"><a href={link} className="post-card__title-link">{title}</a></h2>
                        <div className="post-card__text">{body}</div>
                        <a href={link} className="link post-card__read-more">Читать далее</a>
                    </div>
                </article>
            </div>
        );
    }
}