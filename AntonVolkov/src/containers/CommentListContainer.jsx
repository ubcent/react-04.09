import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import CommentList from 'components/CommentList';
import modelComments from 'models/Comments';

export default class CommentListContainer extends PureComponent {
    constructor(props){
        super(props);
        
        this.state = {
            comments: [],
            loading: false,
        }
    }

    static propTypes = {
        postId: PropTypes.number,
        userId: PropTypes.number,
    };

    componentDidMount() {
        const { postId, userId } = this.props;
        this.setState({ loading: true });
        if (postId) {
            modelComments.getCommentsByPostId(postId)
                .then((comments) => {
                    this.setState( prevState => ({
                        comments: comments,
                        loading: false,
                    }));
                });
        } else if (userId) {
            modelComments.getCommentsByUserId(postId)
                .then((comments) => {
                    this.setState(prevState => ({
                        comments: comments,
                        loading: false,
                    }));
                });
        } else {
            modelComments.getComments()
                .then((comments) => {
                    this.setState( prevState => ({
                        comments: comments,
                        loading: false,
                    }));
                });
        }
    }

    render() {
        const { itemsPerPage, loading } = this.props;
        return (
            <Fragment>
                <CommentList itemsPerPage={itemsPerPage} comments={this.state.comments} />
                {loading && 'Loading...'}
            </Fragment>
        );
    }
}