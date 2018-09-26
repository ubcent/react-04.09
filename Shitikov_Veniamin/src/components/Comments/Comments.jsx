import './Comments.css';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CommentForm from '../CommentForm';
import Comment from 'components/Comment';


// Компонент принимает массив объектов комментариев
export default class Comments extends PureComponent {
    constructor(props) {
        super(props);

    }

    static defaultProps = {
        comments: [],
    };

    static propTypes = {
        comments: PropTypes.array,
    };

    render(){
        const { comments } = this.props;
        return <div>
            {/*<!-- Comments Form -->*/}
            <CommentForm />

            {/*<!-- Comments -->*/}
            {comments.map( (item, index) => {
                const { author, text, blog } = item;
                return <Comment key={index} author={author} text={text} blog={blog}/>
            })}

        </div>
    }
}


