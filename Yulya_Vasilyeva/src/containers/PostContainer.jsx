//импорт React
import React, { PureComponent, Fragment } from 'react';

import Post from 'components/Post';

//для проверки свойств компонента
import PropTypes from 'prop-types';
//функция fetch
import requestData from './func';

export default class PostContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            article: {},// объект с описание поста
            loading: true,
        };
    }
    static propTypes = {
        article: PropTypes.arrayOf(PropTypes.object),
    }

    //получаем статью/
    componentDidMount() {
        const { match } = this.props; //получаем id поста
        const id = match.params.postId;
        // получаем статью
        requestData(`article/${id}`).then((article) => {
            this.setState({
                article,
                loading: false,
            });
        })
    }

    render() {
        const { article, loading } = this.state;
        return (
            <Fragment>
                {loading ? 'Загрузка...' :
                    <Post article={article} />
                }
            </Fragment>
        );
    }
}