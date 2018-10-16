import './Comment.scss';
import moment from 'moment';

import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import UserAvatar from "components/UserAvatar";

export default class Comment extends PureComponent {
    render() {
        const {comment} = this.props;
        console.log(comment);
        moment.locale('ru');
        console.log(moment(comment.date).fromNow());
        return (
            <div className=" row justify-content-center">
                <div className="col-md-8 comment-in-list">
                    <UserAvatar userpic={comment.author.userpic} login={comment.author.login}/>
                    <div className="comment-body">
                        <Link className="user-link" to={"/users/"+comment.author._id}>{comment.author.login}</Link><br/>
                        <span className="time">{moment(comment.date).fromNow()}</span>
                        <p className="comment-text">
                            {comment.body}
                        </p>
                        {comment.post ?
                            <Link to={"/blog/"+comment.post._id} className="topic-link">{comment.post.title}</Link>:
                            ""
                        }
                    </div>
                   
                </div>
            </div>
        );
    }
}
