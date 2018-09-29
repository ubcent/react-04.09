import React from 'react';

import MessengerBodyContainer from 'containers/MessengerBodyContainer';

export default function Chat(props) {
    return (
        <MessengerBodyContainer activeChat={props.match.params.id}/>
    );
}