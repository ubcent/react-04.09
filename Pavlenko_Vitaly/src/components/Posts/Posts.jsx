import './Posts.scss';

import React, {Fragment} from 'react';

import PostCard from 'components/PostCard';

export default function Posts(props) {
    return (
        <Fragment>
            {
                props.articles.map((article) =>
                    <PostCard key={article.id} id={article.id} title={article.title} body={article.body}/>
                )
            }
        </Fragment>
    );
}