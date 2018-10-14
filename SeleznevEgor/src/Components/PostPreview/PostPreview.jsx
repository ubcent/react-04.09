import './PostPreview.scss';
import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';

export default class PostPreview extends PureComponent {
    render() {
        const {author, category, date, id, prevImg, prevText, title} = this.props.article;
        return (
            <div className="col-md-6 small-preview">
                <img className="preview-img" src={prevImg} alt="post preview"/>
                <span className="category">{category.name}</span>
                <h3>{title}</h3>
                <p className="preview-text">{prevText}</p>
                <Link to={"/blog/"+id} className="article-link">read more</Link>
            </div>
        );
    }
}
