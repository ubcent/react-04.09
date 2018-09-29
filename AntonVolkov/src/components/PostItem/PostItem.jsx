import './PostItem.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavLink as Link } from 'react-router-dom';

export default class PostItem extends Component {
    static propTypes = {
        post: PropTypes.object,
    };

    static defaultProps = {
        post: null,
    };

    render() {
        const { post } = this.props; 

        return (
            <article className='post-item'>
                <Link to={`/blog/post/${post.id}`} className="post-item__link">
                    <h2 className="post-item__title"> { post.title } </h2>
                    <p className="post-item__desc"> { post.description } </p>
                </Link>
            </article>
        );
    }
}