import './PostCard.scss';

import React from 'react';
import {Link} from 'react-router-dom';

export default function PostCard(props) {
    const {id, title, body} = props;

    return (
        <div className="col-md-6">
            <article className="post-card">
                <Link to={`/blog/${id}`} className="post-card__img-link"></Link>
                <div className="post-card__body">
                    <h2 className="post-card__title">
                        <Link to={`/blog/${id}`} className="post-card__title-link">{title}</Link>
                    </h2>
                    <div className="post-card__text">{body}</div>
                    <Link to={`/blog/${id}`} className="link post-card__read-more">Читать далее</Link>
                </div>
            </article>
        </div>
    );
}