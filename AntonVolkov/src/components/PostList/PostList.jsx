import './PostList.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostItem from 'components/PostItem';

export default class PostList extends Component {
    static propTypes = {
        posts: PropTypes.array,
    }

    static defaultProps = {
        posts: [],
    };

    render() {

        const { posts } = this.props;
        return (
            <div className="post-list">
                {posts.map( post =>  <PostItem key={post.id} post={post} />)}
            </div>
        );
    }
}