import './Messenger.scss';

import React, {Component} from 'react';
import classNames from 'classnames';

import ContactNav from 'components/ContactNav';
import SendGroup from 'components/SendGroup';
import Messages from 'components/Messages';

export default class Messenger extends Component {

    constructor(props) {
        super(props);

        this.messagesContainer = React.createRef();
        this.handlerMessage = this.handlerMessage.bind(this);
    }

    handlerMessage(message) {
        this.props.addMessage(message, this.props.author);
    }

    componentDidUpdate() {
        this.messagesContainer.current.scrollIntoView({block: 'end', behavior: 'auto'});
    }

    render() {

        const { side, name, author, messages } = this.props;

        const messegerClasses = classNames('messenger', {
            'messenger_left': side === 'left',
            'messenger_right': side === 'right',
        });

        return (
            <div className={messegerClasses}>
                <ContactNav name={name}/>
                <div className="messenger__inner" ref={this.messagesContainer}>
                    <Messages author={author} messages={messages}/>
                </div>
                <SendGroup handlerMessage={this.handlerMessage}/>
            </div>
        );
    }
}