import './InputGroup.scss';

import React from 'react';

export default function InputGroup(props) {
    return (
        <div className="input-group">
            {props.children}
        </div>
    );
}