import './SendGroup.scss';

import React from 'react';

export default function SendGroup(props) {
    return (
        <form className="send-group" action="" onSubmit={props.sendMessage}>
            {props.children}
        </form>
    );
}