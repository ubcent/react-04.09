import './Posts.scss';

import React, { PureComponent, Fragment } from 'react';

import PostCard from 'components/PostCard';

export default class Posts extends PureComponent {

    render() {
        const { articles } = this.props;


        const posts = articles.map((article) =>
            <PostCard
                key={article.id}
                title={article.title}
                body={article.body}
                categories={['category 1', 'category 2']}
                link={`/blog`}
            />
        );

        return (
            <Fragment>{ posts }</Fragment>
        );
    }
}