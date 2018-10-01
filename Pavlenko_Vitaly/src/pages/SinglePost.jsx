import React from "react";

import PostContainer from 'containers/PostContainer';

export default function SinglePost(props) {
    return (
        <div className="container">
            <PostContainer match={props.match}/>
        </div>
    );
}