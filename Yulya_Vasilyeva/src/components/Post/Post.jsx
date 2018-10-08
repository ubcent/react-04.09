//импорт пользовательских стилей
import './Post.scss';

//импорт React
import React, { PureComponent, Fragment } from 'react';

//импортируем список комментариев
import PostCommentsContainer from 'containers/PostCommentsContainer';
//импортируем список комментариев
import FormCommentsContainer from 'containers/FormCommentsContainer';

export default class Post extends PureComponent {
    render() {
        const { article } = this.props;
        
        return (
            <Fragment>
                <h1>{article.title}</h1>
                <p className='post-data'>Дата публикации: {article.data}</p>
                <p className="text-center"><img src={`img/article-${article.id}.jpeg`} alt={article.title} /></p>
                <p>{article.text}</p>
                <PostCommentsContainer />
                <FormCommentsContainer />
            </Fragment>
        );
    }
}