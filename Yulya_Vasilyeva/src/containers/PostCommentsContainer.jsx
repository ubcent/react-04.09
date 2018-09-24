//импорт React
import React, { PureComponent } from 'react';

import PostComments from 'components/Post/PostComments';

//для проверки свойств компонента
import PropTypes from 'prop-types';

export default class PostCommentsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],//массив хранит комментарии к посту
        };
    }
    static propTypes = {
        comments: PropTypes.arrayOf(PropTypes.object),
    }

    //получаем комментарии из JSON
    componentDidMount() {
        const { postId } = this.props; //получаем id поста

        //выбираем комментарии для определенного поста
        const url = `http://127.0.0.1:3000/comments?postId=${postId}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    comments: data,
                });
            });
    }
    render() {
        const { comments } = this.state;
        return (
            <PostComments comments={comments} />
        );
    }
}