import './Article.css';

import React, { PureComponent } from 'react';

export default class Article extends PureComponent{
    constructor(props) {
        super(props);

        this.state = {};
    }
    render(){
        const { article } = this.props;
        return(
            <div className = "article">
                <div className="article__image-block">
                    <img src="https://images.wallpaperscraft.ru/image/kot_grust_chb_125241_300x170.jpg" alt="Lorem"/>
                </div>
                <div className="article__text-block">
                    <p className="article__text">{article.text}</p>
                </div>
            </div>
        );
    }
}