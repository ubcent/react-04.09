import React, { PureComponent, Fragment } from 'react';

export default class CommentsListItem extends PureComponent {

    render() {
        const { id, name, email, body } = this.props;

        return (
            <div className="col-12">
                <div className="post-card comment">
                    <h3 className="comment__title">{name}</h3>
                    <div className="comment__email">{email}</div>
                    <div className="comment__body">{body}</div>
                </div>
            </div>
        );
    }
}