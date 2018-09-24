import './ChatsList.scss';

import React from 'react';
import {Link} from 'react-router-dom';

export default function ChatsList() {
    return (
        <div className="chats-list">
            <h2>Список чатов</h2>
            <ul>
                <li>
                    <Link to="/chat/1">Иван</Link>
                </li>
                <li>
                    <Link to="/chat/2">Ира</Link>
                </li>
            </ul>
        </div>
    );
}