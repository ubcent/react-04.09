//импорт React
import React, { PureComponent, Fragment } from 'react';

import Post from 'components/Post';

//для проверки свойств компонента
import PropTypes from 'prop-types';

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
        //выбираем статью
        const url = `http://127.0.0.1:3000/article/${id}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    article: data,
                    loading: false,
                });
            });
    }

    render() {
        const { article, loading } = this.state;
        
        return (
            <Fragment>
                {loading ? 'Загрузка...' : 
                    <Post article={article}/>
                }
            </Fragment>
        );
    }
}