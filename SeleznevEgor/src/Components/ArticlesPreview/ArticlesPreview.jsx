import './ArticlesPreview.scss';

import React, { PureComponent, Fragment } from 'react';

import LastArtcle from 'components/LastArtcle';
import PostPreview from "../PostPreview/PostPreview";

export default class ArticlesPreview extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const {articles} = this.props;
        
        return (
            <Fragment>
                <LastArtcle />
                <div className="row"></div>
                <div className="col-md-10 offset-md-1">
                    <div className="row">
                        {articles.map((item, index)=>{return <PostPreview key={index} article={item}/>;})}
                    </div>
                </div>
            </Fragment>
        );
    }
}
