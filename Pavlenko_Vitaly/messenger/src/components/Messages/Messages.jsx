import './Messages.scss';

import React, {Component} from 'react';

import Message from 'components/Message';

export default class Messages extends Component {

    render() {
        const { author, messages } = this.props;

        return (
            <div className="messages">
                { messages.map((item, idx) => <Message key={idx} body={item.body} self={author === item.author}/>) }
            </div>
        );
    }
}