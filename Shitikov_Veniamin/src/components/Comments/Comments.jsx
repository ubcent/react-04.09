import './Comments.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentForm from '../CommentForm';


// Компонент принимает массив объектов комментариев
export default class Comments extends Component {
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
                const { image, author, text,subComments } = item;
                return <Comment key={index} image={image} author={author} text={text} subComments={subComments}/>
            })}

        </div>
    }
}


