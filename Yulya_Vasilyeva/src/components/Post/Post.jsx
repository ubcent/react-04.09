//импорт пользовательских стилей
import './Post.scss';

//импорт React
import React, { PureComponent, Fragment } from 'react';
import {Button} from 'reactstrap';

//импортируем список комментариев
import Comments from './Comments';
//импортируем список комментариев
import FormComments from './FormComments';

export default class Post extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            postId: 0, //обнуляем для перехода на главную
            postText: '',//текст поста
            comments: [],//массив хранит комментарии к посту
            update: false,
        };
    }

    //вернуться на главную
    toIndex = () => {
        const { onSend } = this.props;
        onSend(this.postId);
    }

    getUpadte = (newUpdate) => {
        const { update } = this.state;
        this.setState({
            update: newUpdate,
        });
        console.log(update);
    }

    render() {
        const { postText, postId } = this.props;
        return (
            <Fragment>
                <Button onClick={this.toIndex} color="info">Все статьи</Button>
                <hr />
                <h1>{postText.title}</h1>
                <p className='post-data'>Дата публикации: {postText.data}</p>
                <p className="text-center"><img src={`img/article-${postText.id}.jpeg`} alt="" /></p>
                <p>{postText.text}</p>
                <Comments postId={postId}/>
                <FormComments postId={postId} onSend={this.getUpadte}/>
            </Fragment>
        );
    }
}