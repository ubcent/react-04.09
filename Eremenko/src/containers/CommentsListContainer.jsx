import React, {Fragment, PureComponent} from 'react';

import Main from "components/Main";

export default class CommentsListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            loading: false,
            page: 1,
        }
    }

    loadMore = () => {
        this.setState({loading: true });
        fetch(`http://localhost:3000/comments`)
            .then((response) => response.json())
            .then((comments) => {
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        loading: false,
                        comments: prevState.comments.concat(comments),
                        page: prevState.page + 1,
                    }
                })
            })
            .catch(() => {
                this.setState({ error: '' })
            });
    }

    render() {
        const { loading } = this.state;
        return (
            <Fragment>
                <Main/>
                { loading && 'Loading...'}
            </Fragment>
        );
    }
}