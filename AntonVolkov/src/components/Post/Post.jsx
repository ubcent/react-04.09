import './Post.scss';

import React, { Component } from 'react';

import CommentListContainer from 'containers/CommentListContainer';

export default class Post extends Component {
    render() {
        const { post } = this.props;
        return (
            <article className="post">
                <h2>{post.title}</h2>
                <p>{post.text}</p>
                {post.id ? <CommentListContainer postId={post.id} /> : ''}
            </article>
        );
    }
}