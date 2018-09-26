import './BlogPreview.css'

import React, { Component} from 'react';

import { Link } from 'react-router-dom';

export default class BlogPreview extends Component{
    render(){
        const { blog } = this.props;
        return(
            <article className="blog-preview">
                <div className="blog-preview__info-block">
                    <h2 className="blog-preview__title">
                        <Link className="link link_main" to={`/blog/${blog.id}`}>{ blog.title }</Link>
                    </h2>
                    <p className="blog-preview__description">{ blog.description }</p>
                </div>
                <div className="blog-preview__user-block">
                    <img className="blog-preview__user-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBeyQJ_ELi86o4buR57vNCK2ci9alOjNuejXiKIxL8Oyj5cXuz" alt=""/>
                    <span className="blog-preview__user-name">
                        <a className="blog-preview__user-link" href="#">{blog.user.firstName} {blog.user.lastName}</a>
                    </span>
                </div>

            </article>
        )
    }
}