import './PostCard.scss';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import CategoriesList from 'components/CategoriesList';

export default class PostCard extends PureComponent {

    render() {
        const { id, title, body, categories, link } = this.props;

        return (
            <div className="col-md-6">
                <article className="post-card">
                    <Link to={link} className="post-card__img-link"></Link>
                    <div className="post-card__body">
                        <CategoriesList list={categories}/>
                        <h2 className="post-card__title"><Link to={link} className="post-card__title-link">{title}</Link></h2>
                        <div className="post-card__text">{body}</div>
                        <Link to={link} className="link post-card__read-more">Читать далее</Link>
                    </div>
                </article>
            </div>
        );
    }
}