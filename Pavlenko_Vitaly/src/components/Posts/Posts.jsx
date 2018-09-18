import './Posts.scss';

import React, {Component, Fragment} from 'react';

import PostCard from 'components/PostCard';

export default class Posts extends Component {

    render() {
        const { articles } = this.props;

        const posts = articles.map((article) =>
            <PostCard
                key={article.id}
                title={article.title}
                body={article.body}
                categories={article.categories}
                link={article.link}
            />
        );

        return (
            <Fragment>{ posts }</Fragment>
        );
    }
}