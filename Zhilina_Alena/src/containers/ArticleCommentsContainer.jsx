import React, { PureComponent, Fragment } from 'react';

import Comment from 'components/Comment';
import CommentForm from 'components/CommentForm';
import {connect} from 'react-redux';

import {loadListComments} from 'actions/comments';

class ArticleCommentsContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        this.props.loadListComments();
    }

    render() {
        const { comments, idArticle } = this.props;

        return (
            <Fragment>
                {comments.map((comment) => <Comment key={comment._id} comment ={ comment }/>)}
                <CommentForm idArticle = {idArticle}/>
            </Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        comments: state.commentsReducer.comments
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        loadListComments: () => loadListComments(dispatch)(props.idArticle)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCommentsContainer);