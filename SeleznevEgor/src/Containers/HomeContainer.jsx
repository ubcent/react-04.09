/********************************************************************
 * Includes                                                          *
 ********************************************************************/
/*import styles*/
import './homepage.scss';
/*import libs*/
import  React, {PureComponent} from 'react';



import ArticlesPreview from 'components/ArticlesPreview/';
import LastComments from 'components/LastComments/'
import {getPosts} from "../actions/posts";
import {connect} from "react-redux";

class HomeContainer extends PureComponent{
    componentDidMount() {
        console.log('firs mount');
        const { getPosts } = this.props;
        getPosts('0',10);
    }
    
    render(){
        console.log(this.props);
        const articles = new Array(10).fill(10);
        return (
            <div className="container home-page">
                <p className={"greating-message"}><span>Добро пожаловать в  </span></p>
                <h1>Блог</h1>
                <div className="separator"></div>
                <h2>Последние статьи</h2>
                <ArticlesPreview posts={this.props.posts}/>
                <div className="separator"></div>
                <h2>Последние комментарии</h2>
                <LastComments />
            </div>
        )
    }
}



function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        posts: state.posts,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        getPosts: (cat, numbers) => dispatch(getPosts(cat, numbers)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);