/********************************************************************
 * Includes                                                          *
 ********************************************************************/
/*import styles*/
import './homepage.scss';
/*import libs*/
import  React, {PureComponent} from 'react';

import ArticlesPreview from 'components/ArticlesPreview/';
import LastComments from 'components/LastComments/'
import {getPosts} from '../actions/posts';
import {getComments} from  '../actions/comments'
import {connect} from 'react-redux';

class HomeContainer extends PureComponent{
    componentDidMount() {
        console.log('firs mount');
        const { getPosts, getComments } = this.props;
        getPosts('0',10);
        getComments(10);
    }
    
    render(){
        return (
            <div className="container home-page">
                <p className={"greating-message"}><span>Добро пожаловать в  </span></p>
                <h1>Блог</h1>
                <div className="separator"></div>
                <h2>Последние статьи</h2>
                <ArticlesPreview posts={this.props.posts}/>
                <div className="separator"></div>
                <h2>Последние комментарии</h2>
                <LastComments comments={this.props.comments}/>
            </div>
        )
    }
}



function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        posts: state.posts,
        comments: state.comments,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        getPosts: (cat, numbers) => dispatch(getPosts(cat, numbers)),
        getComments: (number) => dispatch(getComments(number)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);