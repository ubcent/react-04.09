import React, { PureComponent, Fragment } from 'react';

import Article from 'components/Article';
import Comment from 'components/Comment';
import LineCaption from 'components/LineCaption';
import CommentForm from 'components/CommentForm';

export default class ArticleContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            article:{},
            loading: false,
        };
    }

    handleCommentRecieve = (comment) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                comments: prevState.comments.concat([comment]),
            }

        });
      
    };

    load = () => {
        this.setState({loading: true});

        const { match } = this.props;

        Promise.all([
            fetch(`http://localhost:3000/posts/${match.params.idArticle}/comments?_expand=user`)
                .then((response) => response.json()),
            fetch(`http://localhost:3000/posts/${match.params.idArticle}`)
                .then((response) => response.json())])
            .then((data) => {
                this.setState(() => ({
                    loading: false,
                    comments: data[0],
                    article: data[1]
                }));
            })
    };

    componentDidMount() {
        this.load();
    }

    render() {
    
        const { comments, article, loading } = this.state;
        return (
            <Fragment>
                <Article article = { article } />
                <LineCaption name="Comments" />
                {comments.map((comment) => <Comment key={comment.id} comment ={ comment }/>)}
                {loading && 'Loading...'}
                <CommentForm onSend = {this.handleCommentRecieve} />
            </Fragment>
        )
    }
}