import React, {PureComponent} from 'react';

import {connect} from 'react-redux';

import ChatsList from 'components/ChatsList';

import {mountEvents} from "actions/messages";

class ChatsListContainer extends PureComponent {
    render() {
        const {userSelf, chats} = this.props;

        return (
            <ChatsList userSelf={userSelf} chats={chats}/>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        userSelf: state.messages.userSelf,
        chats: state.messages.chats,
    }
}

export default connect(mapStateToProps)(ChatsListContainer);