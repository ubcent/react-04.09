//компоненты React
import React, { PureComponent } from 'react';

import Comments from 'components/Comments';

//для проверки свойств компонента
import PropTypes from 'prop-types';
//функция fetch
import requestData from './func';

export default class CommentsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
        }
    }
    static propTypes = {
        comments: PropTypes.arrayOf(PropTypes.object),
    }

    componentDidMount() {
        // получаем список комментариев с сервера
        requestData('comments').then((comments) => {
            this.setState({
                comments
            });
        })
    }

    render() {
        const { comments } = this.state;
        return (
            <Comments comments={comments} />
        );
    }
}