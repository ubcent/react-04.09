import './MessengerContainer.scss';

import React, { PureComponent } from 'react';

export default class MessengerContainer extends PureComponent {

    render() {
        return (
            <div className="messenger-container">
                {this.props.children}
            </div>
        );
    }
}