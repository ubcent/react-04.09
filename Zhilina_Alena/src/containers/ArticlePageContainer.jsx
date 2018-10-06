import React, { PureComponent, Fragment } from 'react';

import ArticleSingleContainer from 'containers/ArticleSingleContainer';
import LineCaption from 'components/LineCaption';
import ArticleCommentsContainer from 'containers/ArticleCommentsContainer';

export default class ArticlePageContainer extends PureComponent {

    render() {
        return (
            <Fragment>
                <ArticleSingleContainer idArticle = {this.props.match.params.idArticle} />
                <LineCaption />
                <ArticleCommentsContainer idArticle = {this.props.match.params.idArticle} />
            </Fragment>
        )
    }
}