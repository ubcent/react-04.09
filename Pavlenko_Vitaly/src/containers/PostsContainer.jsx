import React, {PureComponent} from 'react';

import Posts from 'components/Posts';

export default class PostsContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            loading: false,
        };
    }

    componentDidMount() {
        this.setState({
            loading: true,
        });

        fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10')
            .then((res) => {
                return res.json();
            }).then((data) => {
                this.setState({
                    loading: false,
                    articles: data,
                });
            }).catch((err) => {
                console.error(err);
            });
    }

    render() {
        const {articles, loading} = this.state;
        return (
            loading ? 'loading...' : <Posts articles={articles}/>
        );
    }
}