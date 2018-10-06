import React, { PureComponent, Fragment } from 'react';
import {connect} from 'react-redux';

import {loadListBlogs} from 'actions/blogs';

import BlogPreview from 'components/BlogPreview';

class BlogListContainer extends PureComponent {

    componentDidMount() {
        this.props.loadListBlogs();
    }

    render() {
        const { blogs } = this.props;

        return (
            <Fragment>
                {blogs.map((blog) => <BlogPreview key={blog._id} blog ={ blog }/>)}
            </Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        blogs: state.blogsReducer.entities,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        loadListBlogs: () => loadListBlogs(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogListContainer);