import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PostList from 'components/PostList';
import Pagination from 'components/Pagination';
import modelPosts from 'models/Posts';
import { loadPosts, loadPostsByIds, loadPostsByUid } from 'actions/actionsPosts';

class PostListContainer extends PureComponent {

    static propTypes = {
        limit: PropTypes.number,
        userId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        postIds: PropTypes.arrayOf(PropTypes.number),
    }

    static defaultProps = {
        limit: null,
    };

    componentDidMount() {
        this.loadPosts();    
    }

    changePage = page => {
        this.loadPosts(page);
    }

    loadPosts = (page = 1) => {
        const { postIds, userId, limit } = this.props;

        if (postIds) {
            this.props.dispatch(loadPostsByIds(limit, page, postIds));
        } else if (userId) {
            this.props.dispatch(loadPostsByUid(limit, page, userId));
        } else {
            this.props.dispatch(loadPosts(limit, page));
        }
    }

    render() {
        const { isLoading, limit, posts, count, currentPage } = this.props;

        return (
            <Fragment>
                { isLoading && 'Loading...' }
                <PostList posts={posts}  />
                {limit && count && count > limit ? <Pagination
                    limit={limit}
                    count={count}
                    currentPage={currentPage}
                    onChangePage={this.changePage}
                /> : ''}
            </Fragment>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        ...state.posts,
    }
}
/*
function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        mountEvents: () => dispatch(mountEvents()),
        sendMessage: (message) => dispatch(sendMessage(message)),
    }
}
*/
export default connect(mapStateToProps/*, mapDispatchToProps*/)(PostListContainer);