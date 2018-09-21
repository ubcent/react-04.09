import './ArticlePreview.css'

import React, { PureComponent} from 'react';


export default class ArticlePreview extends PureComponent{
    render(){
        return(
            <article className="article-preview">
                <div className="article-preview__image-block">
                    <img src="https://images.wallpaperscraft.ru/image/kot_grust_chb_125241_300x170.jpg" alt="Lorem"/>
                </div>
                <div className="article-preview__text-block">
                    <h2 className="article-preview__title"><a className="link link_main" href="#">First Special News Here.</a></h2>
                    <div className="article-preview__meta">
                        <span className="article-preview__date">MAR 01, 2017 </span>
                        <em> / </em>
                        <span className="article-preview__author"><a className=" link link_sub" href="#">SUPER USER</a></span>
                    </div>
                    <p className="article-preview__text">Sed porttitor lectus nibh. consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus </p>
                </div>
            </article>
        )
    }
}