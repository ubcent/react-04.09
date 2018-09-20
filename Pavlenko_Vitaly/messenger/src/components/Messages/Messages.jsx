import './Messages.scss';

import React, { PureComponent } from 'react';

import Message from 'components/Message';

export default class Messages extends PureComponent {

    constructor(props) {
        super(props);

        this.messagesContainer = React.createRef();
    }

    componentDidUpdate() {
        this.messagesContainer.current.scrollIntoView({block: 'end', behavior: 'auto'});
    }

    render() {
        const { author, messages } = this.props;

        return (
            <div className="messages" ref={this.messagesContainer}>
                { messages.map((item, idx) => <Message key={idx} body={item.body} self={author === item.author}/>) }
            </div>
        );
    }
}