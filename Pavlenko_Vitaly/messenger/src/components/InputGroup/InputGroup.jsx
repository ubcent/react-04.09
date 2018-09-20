import './InputGroup.scss';

import React, { PureComponent } from 'react';

export default class InputGroup extends PureComponent {

    render() {
        return (
            <div className="input-group">
                {this.props.children}
            </div>
        );
    }
}