import React, {PureComponent} from 'react';

import Post from 'components/Post';

export default class PostContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            post: {},
            loading: false,
        };
    }

    componentDidMount() {
        const {match} = this.props;
        this.setState({ loading: true });

        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
            .then((res) => {
                return res.json();
            }).then((post) => {
                this.setState({
                    loading: false,
                    post,
                });
            }).catch((err) => {
                console.error(err);
            });
    }

    render() {
        const {post, loading} = this.state;
        return (
            loading ? 'loading...' : <Post post={post}/>
        );
    }
}