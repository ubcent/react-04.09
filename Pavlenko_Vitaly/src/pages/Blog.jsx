import React from "react";

import PostsContainer from 'containers/PostsContainer';

export default function Blog() {
    return (
        <div className="container">
            <div className="row">
                <PostsContainer/>
            </div>
        </div>
    );
}