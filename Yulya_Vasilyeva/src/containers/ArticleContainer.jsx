//импорт React
import React, { PureComponent } from 'react';

import Article from 'components/Article';

//для проверки свойств компонента
import PropTypes from 'prop-types';

export default class ArticleContainer extends PureComponent {
    constructor(props){
       super(props);
       
        this.state = {
            article: [],
        }
    }
    static propTypes = {
        article: PropTypes.arrayOf(PropTypes.object),
    }

    componentDidMount(){
        const url = 'http://127.0.0.1:3000/article';
        fetch(url)
        .then( resp => resp.json())
        .then( data => {
            this.setState({
                article: data
            });
        })
    }

    render() {
        const { article } = this.state;
        return (
            <Article article={article}/>
        );
    }
}