import './style.css';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Chathead from "components/Chathead/Chathead";
import Chatbox from "components/Chatbox/Chatbox";
import Chatinput from "components/Chatinput/Chatinput";




class Layout extends Component {
    constructor(props){
        super(props);

        this.state = {
            messages: [
                {
                    id:1,
                    type: 'in',
                    message: 'By Other User',
                },
                {
                    id:2,
                    type: 'out',
                    message: 'By this User, message',
                },
                {
                    id:1,
                    type: 'in',
                    message: 'By Other User',
                },
                {
                    id:2,
                    type: 'out',
                    message: 'By this User, message',
                },
                {
                    id:1,
                    type: 'in',
                    message: 'By Other User',
                },
                {
                    id:2,
                    type: 'out',
                    message: 'By this User, message',
                },

            ],

        }
    }
    render(){
        const sendMessage = (text) => {
            const message = {
                id: new Date().getTime().toString(),
                type: 'out',
                message: text,
            }
            this.state.messages.push(message);
            this.setState({
                messages: this.state.messages,
            })

        };
        return <div>
            <Chathead title={'CHAT'}/>
            <Chatbox items={this.state.messages}/>
            <Chatinput handleSubmit={sendMessage}/>
        </div>
    }
}

ReactDom.render(<Layout  />, document.getElementById('root'));