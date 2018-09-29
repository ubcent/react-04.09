import './ChatRoom.css';

import React, { PureComponent } from 'react';

import ChatRoomHead from 'components/ChatRoomHead';
import ChatRoomBox from 'components/ChatRoomBox';

export default class ChatRoom extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            users: [],
        }
    }

    componentDidMount(){
        const { URL } = this.props;
        fetch(URL).
            then( response => response.json()).
            then( data => this.setState({ users: data}));

    }

    render(){
        return <div>
            <ChatRoomHead title={'CHATROOM'}/>
            <ChatRoomBox chats={this.state.users} handleClick={this.props.handleClick}/>
        </div>
    }
}