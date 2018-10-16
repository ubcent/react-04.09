/********************************************************************
 * Includes                                                          *
 ********************************************************************/
/*import libs*/
import  React, {PureComponent} from 'react';
import {connect} from "react-redux";

import {getPost} from "../actions/posts";
import LoadMore from 'components/loadMore';
import LastComments from "components/LastComments/";
import Post from "components/Post/";
import {getPostComments, addComment} from "../actions/comments";
import CommentForm from "components/CommentForm/";

class PostContainer extends PureComponent{
    componentDidMount() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        console.log('Post blog');
        const { getPost,getPostComments, comments } = this.props;
        const id = this.props.match.params.id;
        getPost(id);
        getPostComments(id, comments.STEP);
    }

    loadMoreComments = () =>{
        const {getPostComments,comments } = this.props;
        getPostComments(
            this.props.match.params.id,
            comments.comments.length+comments.STEP);
    };
    addToComment =(comment)=> {
        console.log(comment);
        const {user, post, addComment} = this.props;
        console.log(user);
        console.log(post);
        addComment({
           body: comment,
           author: user.id,
           post: this.props.match.params.id,
        });

    };

    render(){
        const {post, comments, user} = this.props;
        console.log(this.props);
        return (
            <main>
                <Post post={post}/>
                <div className="separator"></div>
                {user.logined ?
                    <CommentForm send={this.addToComment}/>
                    :<p className={"no-comments"}> Только зарегистрированные пользователи могут оставлять комментарии</p>}
                <LastComments comments={comments} />
                {comments.finish ? '':  <LoadMore loadMore={this.loadMoreComments}/>}
            </main>
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        post: state.posts.postActive,
        user: state.users.useractive,
        comments: state.comments,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        getPost: (cat, numbers) => dispatch(getPost(cat, numbers)),
        getPostComments : (id, number) => dispatch(getPostComments(id, number)),
        addComment: (comment) => dispatch(addComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);