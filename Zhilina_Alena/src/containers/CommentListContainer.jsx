import React, { PureComponent, Fragment } from 'react';

import Comment from 'components/Comment';

export default class CommentListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            loading: false,
        };
    }

    load = () => {
        this.setState({loading: true});

        fetch(`http://localhost:8000/comments`)
            .then((response) => response.json())
            .then((comments) => {
                this.setState(() => ({
                    loading: false,
                    comments: comments
                }));
            });
    };

    componentDidMount() {
        this.load();
    }
    render() {
        const { comments, loading } = this.state;
        return (
            <Fragment>
                {comments.map((comment) => <Comment key={comment._id} comment ={ comment }/>)}
                {loading && 'Loading...'}
            </Fragment>
        )
    }
}