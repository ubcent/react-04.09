import {handleActions} from 'redux-actions';

import {messageReceived} from "actions/messages";

const initialState = {
    userSelf: 'Ivan',
    entities: [
        {
            "id": 1,
            "chatId": 1,
            "author": "Ivan",
            "body": "Привет"
        },
        {
            "id": 2,
            "chatId": 1,
            "author": "Irina",
            "body": "Привет!"
        },
        {
            "id": 3,
            "chatId": 1,
            "author": "Ivan",
            "body": "Как твои дела?"
        },
        {
            "id": 4,
            "chatId": 1,
            "author": "Irina",
            "body": "ОК!"
        },
        {
            "id": 5,
            "chatId": 2,
            "author": "Ivan",
            "body": "Привет, дружище"
        },
        {
            "id": 6,
            "chatId": 2,
            "author": "Petr",
            "body": "Привет, Петр!"
        },
        {
            "id": 7,
            "chatId": 3,
            "author": "Petr",
            "body": "Привет, бро!"
        },
        {
            "id": 8,
            "chatId": 3,
            "author": "Ivan",
            "body": "Привет, как сам?"
        },
        {
            "id": 9,
            "chatId": 3,
            "author": "Petr",
            "body": "Потихоньку, бро)"
        },
        {
            "id": 10,
            "chatId": 3,
            "author": "Petr",
            "body": "Пока, бро!"
        }
    ],
    chats: [
        {
            id: 1,
            users: ['Ivan', 'Irina']
        },
        {
            id: 2,
            users: ['Ivan', 'Petr']
        },
        {
            id: 3,
            users: ['Ivan', 'Vasya']
        }
    ]
};

export default handleActions({
    [messageReceived]: (state, action) => {
        return {
            ...state,
            entities: state.entities.concat([action.payload]),
        }
    }
}, initialState);