import './ChatsList.scss';

import React from 'react';

import ChatsListItem from './ChatsListItem';

export default function ChatsList(props) {
    const {userSelf, chats} = props;

    return (
        <div className="chats-list-wrapper">
            <header className="contact-header chats-list-header">
                <div className="contact-header__img"></div>
                <h2 className="contact-header__name">{userSelf}</h2>
            </header>
            <ul className="chats-list">
                {
                    chats.map((chat) => (
                        <ChatsListItem
                            key={chat.id}
                            id={chat.id}
                            users={chat.users}
                            userSelf={userSelf}/>
                    ))
                }
            </ul>
        </div>
    );
}