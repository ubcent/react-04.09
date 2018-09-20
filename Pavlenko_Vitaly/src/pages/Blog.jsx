import React, { PureComponent } from "react";

import Posts from 'components/Posts';

export default class Blog extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            articles: []
        };
    }

    getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                return res.json();
            }).then((data) => {
            this.setState({
                articles: data
            });
        }).catch((err) => {
            console.error(err);
        });
    }

    componentDidMount() {
        this.getPosts();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Posts articles={this.state.articles}/>
                </div>
            </div>
        );
    }
}