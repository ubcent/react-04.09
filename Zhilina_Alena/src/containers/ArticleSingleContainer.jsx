import React, { PureComponent, Fragment } from 'react';

import Article from 'components/Article';

export default class ArticleSingleContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            article: {},
        };
    }

    load = () => {
        fetch(`http://localhost:8000/posts/${this.props.idArticle}`)
            .then((response) => response.json())
            .then((article) => {
                this.setState(() => ({
                    article: article
                }));
            });
    };

    componentDidMount() {
        this.load();
    }

    render() {
        const { article } = this.state;

        return (
            <Fragment>
                <Article article={ article } />
            </Fragment>
        )
    }
}