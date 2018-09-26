import React, { PureComponent, Fragment } from 'react';

import BlogPreview from 'components/BlogPreview';

export default class BlogListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            blogs: [],
            loading: false,
        };
    }

    load = () => {
        this.setState({ loading: true });
        fetch(`http://localhost:3000/blogs/?_expand=user`)
            .then((response) => response.json())
            .then((blogs) => {
                this.setState(() => ({
                    loading: false,
                    blogs: blogs
                }));
            });
    };

    componentDidMount() {
        this.load();
    }

    render() {
        const { blogs, loading } = this.state;

        return (
            <Fragment>
                {blogs.map((blog) => <BlogPreview key={blog.id} blog ={ blog }/>)}
                {loading && 'Loading...'}
            </Fragment>
        )
    }
}