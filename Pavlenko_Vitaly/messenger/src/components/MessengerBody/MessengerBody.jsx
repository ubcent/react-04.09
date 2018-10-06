import './MessengerBody.scss';

import React from 'react';

export default function MessengerBody(props) {
    return (
        <div className="messenger-body">
            {props.children}
        </div>
    );
}