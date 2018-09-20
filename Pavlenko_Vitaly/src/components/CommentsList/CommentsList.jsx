import './CommentsList.scss';

import React, { PureComponent, Fragment } from 'react';

import CommentsListItem from './CommentsListItem';

export default class CommentsList extends PureComponent {

    render() {
        const { comments } = this.props;

        return (
            <Fragment>{
                comments.map((comment) =>
                    <CommentsListItem
                        key={comment.id}
                        name={comment.name}
                        email={comment.email}
                        body={comment.body}
                    />
                )
            }</Fragment>
        );
    }
}