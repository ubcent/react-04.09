import React, { PureComponent } from "react";

import CommentsList from 'components/CommentsList';

export default class Comments extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            comments: []
        };
    }

    getComments() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res) => {
                return res.json();
            }).then((data) => {
            this.setState({
                comments: data
            });
        }).catch((err) => {
            console.error(err);
        });
    }

    componentDidMount() {
        this.getComments();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <CommentsList comments={this.state.comments}/>
                </div>
            </div>
        );
    }
}