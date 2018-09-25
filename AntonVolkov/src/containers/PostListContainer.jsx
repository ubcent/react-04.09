import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import PostList from 'components/PostList';
import modelPosts from 'models/Posts';

export default class PostListContainer extends PureComponent {
    constructor(props){
        super(props);
        
        this.state = {
            posts: [],
            loading: false,
            page: null,
            count: 0,
        }
    }

    static propTypes = {
        limit: PropTypes.number,
        userId: PropTypes.number,
        postIds: PropTypes.arrayOf(PropTypes.number),
    }

    static defaultProps = {
        limit: null,
    };

    componentDidMount() {
        this.loadPosts();    
    }

    changePage = page => {
        this.setState({ page: page });
        this.loadPosts(page);
    }

    loadPosts = (page) => {
        const { postIds, userId, limit } = this.props;

        this.setState({ loading: true });

        if (postIds) {
            modelPosts.getPostsById(postsIds, limit, page)
                .then(({posts, count}) => {
                    this.setState((prevState) => ({
                        loading: false,
                        posts,
                        count,
                    }));
                });
        } else if (userId) {
            modelPosts.getPostsByUserId(userId, limit, page)
                .then(({posts, count}) => {
                    this.setState((prevState) => ({
                        loading: false,
                        posts,
                        count,
                    }));
                });
        } else {
            modelPosts.getPosts(limit, page)
                .then(({posts, count}) => {
                    this.setState((prevState) => ({
                        loading: false,
                        posts,
                        count,
                    }));
                });
        }
    }

    render() {
        const { limit } = this.props;
        const { posts, loading, count } = this.state;

        return (
            <Fragment>
                { loading && 'Loading...' }
                <PostList limit={limit} count={count} posts={posts} onChangePage={this.changePage} />
            </Fragment>
        );
    }
}