import './Post.scss';

import React from 'react';

export default function Post(props) {
    const {post} = props;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}