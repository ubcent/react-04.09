import React, {PureComponent} from 'react';

import chats from 'data/db.json';

import MessengerBody from 'components/MessengerBody';
import ContactHeader from 'components/ContactHeader';
import Messages from 'components/Messages';
import SendGroupContainer from 'containers/SendGroupContainer';

export default class MessengerBodyContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            user: '',
        };
    }

    sendMessage = (message) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                messages: prevState.messages.concat([{
                    'id': prevState.messages.length + 1,
                    'body': message,
                    'self': true,
                }])
            }
        });
    }

    componentDidMount() {
        const {messages, user} = chats.filter(chat => chat.id == this.props.activeChat)[0];

        this.setState({
            messages,
            user,
        });
    }

    render() {
        const {messages, user} = this.state;
        return (
            <MessengerBody>
                <ContactHeader user={user}/>
                <Messages messages={messages}/>
                <SendGroupContainer onSend={this.sendMessage}/>
            </MessengerBody>
        );
    }
}