import React, { PureComponent, Fragment } from 'react';

import ArticlePreview from 'components/ArticlePreview';

export default class PostListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            loading: false,
        };
    }

    load = () => {
        const { match } = this.props;

        this.setState({loading: true});
        fetch(`http://localhost:3000/posts?blogId=${match.params.idBlog}`)
            .then((response) => response.json())
            .then((posts) => {
                this.setState(() => ({
                    loading: false,
                    posts: posts
                }));
            });
    };

    componentDidMount() {
        this.load();
    }

    render() {
        const { posts, loading } = this.state;
        return (
            <Fragment>
                {posts.map((post) => <ArticlePreview key={post.id} article ={ post }/>)}
                {loading && 'Loading...'}
            </Fragment>
        )
    }
}