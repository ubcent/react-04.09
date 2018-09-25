//импорт React
import React, { PureComponent } from 'react';

import PostComments from 'components/Post/PostComments';

//для проверки свойств компонента
import PropTypes from 'prop-types';
//функция fetch
import requestData from './func';

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
        // получаем список комментариев к статье
        requestData(`comments?postId=${postId}`).then((comments) => {
            this.setState({
                comments
            });
        })
    }
    render() {
        const { comments } = this.state;
        return (
            <PostComments comments={comments} />
        );
    }
}