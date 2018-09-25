import './PostList.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'components/Pagination';

import PostItem from 'components/PostItem';

export default class PostList extends Component {
    static propTypes = {
        limit: PropTypes.number,
        count: PropTypes.number,
        posts: PropTypes.array,
    }

    static defaultProps = {
        limit: null,
        count: 0,
        posts: [],
    };

    render() {

        const { posts, limit, count, onChangePage } = this.props;
        return (
            <div className="post-list">
                {posts.map( post =>  <PostItem key={post.id} post={post} />)}
                {limit && count ? <Pagination onChangePage={onChangePage} limit={limit} count={count} /> : '' }
            </div>
        );
    }
}