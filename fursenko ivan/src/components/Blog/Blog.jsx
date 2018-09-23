import './Blog.css';

import React, {
    PureComponent,
    Fragment
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Post from 'components/Post';
import jsonData from 'data/blogPosts.txt';

export default class Blog extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            comments: [],
        };
    }
    
    componentDidMount = () => {
        const data = JSON.parse(jsonData);
        this.setState({
            posts: data.posts,
            comments: data.comments,
        });
    }
    
    render() {
        const contentClasses = classNames('blog');
        const { posts, comments } = this.state;
        
        return <div className={contentClasses}>
               {
                posts.map((post) => {
                    const postComments = comments.find((obj) => (obj.id == post.id));
                    return <Post key={post.id} onClick={this.getComments} data={post} comments={postComments ? postComments.data : postComments} />
                })
                }
            </div>
    }
}
