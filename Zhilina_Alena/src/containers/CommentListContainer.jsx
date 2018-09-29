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

        Promise.all([
            fetch(`http://localhost:3000/comments/?_expand=user`)
                .then((response) => response.json()),
            fetch(`http://localhost:3000/comments/?_expand=post`)
                .then((response) => response.json())])
            .then((data) => data[0].map((item, idx) => Object.assign(item, data[1][idx])))
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
                {comments.map((comment) => <Comment key={comment.id} comment ={ comment }/>)}
                {loading && 'Loading...'}
            </Fragment>
        )
    }
}