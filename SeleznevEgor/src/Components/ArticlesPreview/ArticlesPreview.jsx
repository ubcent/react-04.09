import './ArticlesPreview.scss';

import React, { PureComponent, Fragment } from 'react';

import LastArtcle from 'components/LastArtcle';
import PostPreview from "../PostPreview/PostPreview";

export default class ArticlesPreview extends PureComponent {
    
    render() {
        console.log('articles', this.props);
        const {posts} = this.props;
        
        return (
            <Fragment>
                {posts.posts[0] ? <LastArtcle post={posts.posts[0]} /> : ''}
                <div className="row"></div>
                <div className="col-md-10 offset-md-1">
                    <div className="row">
                        {posts.posts.slice(1).map((item, index)=>{return <PostPreview key={index} article={item}/>;})}
                    </div>
                </div>
            </Fragment>
        );
    }
}
