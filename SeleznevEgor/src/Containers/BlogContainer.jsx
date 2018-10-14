/********************************************************************
 * Includes                                                          *
 ********************************************************************/
/*import styles*/

/*import libs*/
import  React, {PureComponent} from 'react';
import  PropTypes from 'prop-types';
import {connect} from "react-redux";

import {getPosts, morePosts} from "../actions/posts";
import {getCategories, setActiveCategory} from "../actions/category";

import CategoryNav from 'components/categoryNav';
import ArticlesPreview from 'components/ArticlesPreview/';
import LoadMore from 'components/loadMore';

class BlogContainer extends PureComponent{
    componentDidMount() {
        console.log('first mount blog');
        const { getPosts, getCategories,  posts, categories } = this.props;
        getPosts(categories.active,posts.STEP);
        getCategories();
    }

    categoryClick = (event) => {
        const { getPosts, setActiveCategory, posts} = this.props;
        const category = event.target.id === 'AllCategories' ? '0': event.target.id;
        getPosts(category,posts.STEP);
        setActiveCategory(category);
    };
    loadMorePosts = () =>{
        const {categories, posts, getPosts} = this.props;
        getPosts(categories.active ,posts.posts.length+posts.STEP);
    };

    render(){
        console.log(this.props);
        const {posts, categories} = this.props;
        return (
            <main>
                <CategoryNav categories={categories} CategoryClick={this.categoryClick}/>
                <ArticlesPreview posts={this.props.posts}/>
                {posts.finish ? '':  <LoadMore loadMore={this.loadMorePosts}/>}
            </main>
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        posts: state.posts,
        categories: state.categories
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        getPosts: (cat, numbers) => dispatch(getPosts(cat, numbers)),
        getCategories: () =>  dispatch(getCategories()),
        setActiveCategory: (catId) =>  dispatch(setActiveCategory(catId)),
        morePosts: (cat, number) => dispatch(morePosts(cat, number)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);