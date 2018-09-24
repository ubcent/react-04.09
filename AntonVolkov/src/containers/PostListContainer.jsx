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
        }
    }

    static propTypes = {
        itemsPerPage: PropTypes.number,
        userId: PropTypes.number,
        postIds: PropTypes.arrayOf(PropTypes.number),
    }

    static defaultProps = {
        itemsPerPage: 12,
    };

    componentDidMount() {
        this.setState({ loading: true });
        const { postIds, userId } = this.props;
        if (postIds) {
            modelPosts.getPostsById(postsIds)
                .then((posts) => {
                    this.setState((prevState) => ({
                        loading: false,
                        posts,
                    }));
                });
        } else if (userId) {
            modelPosts.getPostsByUserId(userId)
                .then((posts) => {
                    this.setState((prevState) => ({
                        loading: false,
                        posts,
                    }));
                });
        } else {
            modelPosts.getPosts()
                .then((posts) => {
                    this.setState((prevState) => ({
                        loading: false,
                        posts,
                    }));
                });
        }
        
    }

    render() {
        const { itemsPerPage } = this.props;
        const { posts, loading } = this.state;

        return (
            <Fragment>
                <PostList itemsPerPage={itemsPerPage} posts={posts} />
                { loading && 'Loading...' }
            </Fragment>
        );
    }
}