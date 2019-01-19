import './LastArtcle.scss';

import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

export default class LastArtcle extends PureComponent {
    
    render() {
        const {author, category, date, id, prevImg, prevText, title} = this.props.post;
        return (
            <div className="LastArtcle container">
                <img className={"preview-img"} src={prevImg} alt="last post preview"/>
                <div className="row justify-content-center">
                    <div className="preview col-10">
                        <span className={"category"}>{category.name}</span>
                        <h3>{title}</h3>
                        <p className="preview-text">{prevText}
                        </p>
                        <Link to={"/blog/"+id} className={"article-link"}>read more</Link>
                    </div>
                </div>
            </div>
        );
    }
}
