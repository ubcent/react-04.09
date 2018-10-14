/********************************************************************
 * Includes                                                          *
 ********************************************************************/
/*import libs*/
import  React, {PureComponent} from 'react';
import {connect} from "react-redux";

import {getComments} from "../actions/comments";

import LastComments from 'components/LastComments/'
import LoadMore from 'components/loadMore';

class CommentContainer extends PureComponent{
    componentDidMount() {
        const {getComments, comments } = this.props;
        getComments(comments.STEP);
    }

    loadMoreComments = () =>{
        const {getComments} = this.props;
        getComments(comments.comments.length+comments.STEP);
    };

    render(){
        const {comments} = this.props;
        return (
            <div className={"comments-page"}>
                <h1>Последние комментарии</h1>
                <LastComments comments={comments}/>
                {comments.finish ? '':  <LoadMore loadMore={this.loadMoreComments}/>}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        comments: state.comments,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        getComments: (number) => dispatch(getComments(number)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);