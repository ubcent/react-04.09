//импорт React
import React, { PureComponent } from 'react';

import Article from 'components/Article';

//для проверки свойств компонента
import PropTypes from 'prop-types';
//функция fetch
import requestData from './func';

export default class ArticleContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            article: [],
        }
    }
    static propTypes = {
        article: PropTypes.arrayOf(PropTypes.object),
    }

    componentDidMount() {
        // получаем список статей с сервера
        requestData('article').then((article) => {
            this.setState({
                article
            });
        })
    }

    render() {
        const { article } = this.state;
        return (
            <Article article={article} />
        );
    }
}