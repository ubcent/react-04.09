import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import MessengerBody from 'components/MessengerBody';
import ContactHeader from 'components/ContactHeader';
import Messages from 'components/Messages';
import SendGroupContainer from 'containers/SendGroupContainer';

import {mountEvents, sendMessage} from "actions/messages";

class MessengerBodyContainer extends PureComponent {
    componentDidMount() {
        const {mountEvents} = this.props;
        mountEvents();
    }

    handleSend = (message) => {
        const {userSelf, messages, activeChat, sendMessage} = this.props;
        const lastId = messages.length + 1;
        sendMessage({
            id: lastId,
            chatId: activeChat,
            author: userSelf,
            body: message,
        });
    }

    render() {
        const {userSelf, messages, chats, activeChat} = this.props;
        const messagesResult = messages.filter(chat => chat.chatId == activeChat);
        const user = chats.filter(chat => chat.id == activeChat)[0].users.filter(user => user !== userSelf)[0];

        return (
            <MessengerBody>
                <ContactHeader user={user}/>
                <Messages author={userSelf} messages={messagesResult}/>
                <SendGroupContainer handleSend={this.handleSend}/>
            </MessengerBody>
        );
    }
}

// Отвечает за то, что будет в props компонента
function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        userSelf: state.messages.userSelf,
        messages: state.messages.entities,
        chats: state.messages.chats,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        mountEvents: () => mountEvents(dispatch),
        sendMessage: sendMessage(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessengerBodyContainer);