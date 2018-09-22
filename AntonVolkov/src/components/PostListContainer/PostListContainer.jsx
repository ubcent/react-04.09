import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import PostList from 'components/PostList';
import modelPosts from 'models/Posts';

export default class PostListContainer extends PureComponent {
    constructor(){
        this.state = {
            posts: [],
        }
    }

    static propTypes = {
        itemsPerPage: PropTypes.number,
    }

    static defaultProps = {
        itemsPerPage: 12,
    };

    componentDidMount() {
        modelPosts.getPosts()
            .then((posts) => {
                this.setState({
                    ...this.state,
                    posts: posts,
                });
            });
    }

    render() {
        const { itemsPerPage } = this.props;
        
        return (<PostList itemsPerPage={itemsPerPage} posts={this.state.posts} />);
    }
}