import React from 'react';
import {Link} from 'react-router-dom';

export default function ChatsListItem(props) {
    const {id, users, userSelf} = props;

    return (
        <li className={`chats-list__item`}>
            <Link className="chats-list__link" to={`/chat/${id}`}>
                <div className="chats-list__img"/>
                <span className="chats-list__name">{users.filter(user => user !== userSelf)}</span>
            </Link>
        </li>
    );
}