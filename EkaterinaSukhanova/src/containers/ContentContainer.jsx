import React, { PureComponent, Fragment } from 'react';

import Content from 'components/Content';

export default class ContentContainer extends PureComponent{
    constructor(props){
        super(props);

        this.state = {
            posts: [],
            loading: false,
            page: 1,
        };
    }

    loadMore = () => {
        const {page} = this.state;

        this.setState({
            loading: true
        });
        fetch(`http://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
            .then((response) => response.json())
            .then((newPosts) =>{
                this.setState((prevState) => ({
                    loading: false,
                    posts: prevState.posts.concat(newPosts),
                    page: prevState.page +1,
                }));
            });
    };

    componentDidMount() {
        this.loadMore();
    }

    render() {
        const { posts, loading } = this.state;

        return (
            <Fragment>
                <Content onLoadMore={this.loadMore} posts={posts} />
                {loading && 'Loading...'}
            </Fragment>
        )
    }

}