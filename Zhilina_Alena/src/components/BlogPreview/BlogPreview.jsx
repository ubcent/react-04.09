import './BlogPreview.css'

import React, { PureComponent} from 'react';

export default class BlogPreview extends PureComponent{
    render(){
        return(
            <article className="blog-preview">
                <div className="blog-preview__info-block">
                    <h2 className="blog-preview__title"><a className="link link_main" href="#">Guitar in the way stree</a></h2>
                    <p className="blog-preview__description">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa.</p>
                </div>
                <div className="blog-preview__user-block">
                    <img className="blog-preview__user-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBeyQJ_ELi86o4buR57vNCK2ci9alOjNuejXiKIxL8Oyj5cXuz" alt=""/>
                    <span className="blog-preview__user-name"><a className="blog-preview__user-link" href="#">JANE</a></span>
                </div>

            </article>
        )
    }
}