//импорт React
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostComments from 'components/Post/PostComments';
import {mountEventCommentsPost} from 'actions/comments';

//для проверки свойств компонента
import PropTypes from 'prop-types';

class PostCommentsContainer extends PureComponent {
    //получаем комментарии из JSON
    componentDidMount() {
        const { mountEventCommentsPost, match } = this.props; //получаем id поста
        const postId = match.params.postId;
        mountEventCommentsPost(postId);
    }
    render() {
        const { comments } = this.props;
        return (
            <PostComments comments={comments} />
        );
    }
}

function mapStateToProps(state, ownProps){
    PostCommentsContainer.propTypes = {
        comments: PropTypes.arrayOf(PropTypes.object),
    }
    return{
        ...ownProps,
        comments: state.comments.commentsPost,
    }
}
function mapDispatchToProps(dispatch, props){
    return{
        ...props,
        mountEventCommentsPost: mountEventCommentsPost(dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(PostCommentsContainer));