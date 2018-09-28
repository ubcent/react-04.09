import './style.css';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import Chathead from 'components/Chathead';
import Chatbox from 'components/Chatbox';
import Chatinput from 'components/Chatinput';
import ChatRoom from './components/ChatRoom';
import Login from "./components/Login";
import store from './store';



class Layout extends Component {
    constructor(props){
        super(props);
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
            {/*<ChatRoom URL='http://localhost:3000/users' />*/}
            <Provider store={store}>
                <Login/>
            </Provider>
        </div>
    }
}

ReactDom.render(<Layout  />, document.getElementById('root'));