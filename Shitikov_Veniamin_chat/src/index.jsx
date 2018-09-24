import './style.css';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Chathead from 'components/Chathead';
import Chatbox from 'components/Chatbox';
import Chatinput from 'components/Chatinput';
import ChatRoom from './components/ChatRoom/ChatRoom';




class Layout extends Component {
    constructor(props){
        super(props);
    }

    goToChat(user){
        
    }

    render(){
        const sendMessage = (text) => {
            const message = {
                id: new Date().getTime().toString(),
                type: 'out',
                message: text,
            };
            const messages = this.state.messages.concat([message]);
            this.setState({
                messages: messages,
            })

        };
        return <div>
            <ChatRoom URL='http://localhost:3000/users' />
        </div>
    }
}

ReactDom.render(<Layout  />, document.getElementById('root'));