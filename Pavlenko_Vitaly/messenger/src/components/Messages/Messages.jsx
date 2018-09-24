import './Messages.scss';

import React from 'react';

import Message from 'components/Message';

export default function Messages(props) {
    return (
        <div className="messages">
            {
                props.messages.map(item => (
                    <Message key={item.id} body={item.body} self={item.self}/>
                ))
            }
        </div>
    );
}