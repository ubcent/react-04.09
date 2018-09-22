import './style.css';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Chathead from 'components/Chathead';
import Chatbox from 'components/Chatbox';
import Chatinput from 'components/Chatinput';




class Layout extends Component {
    constructor(props){
        super(props);

        this.state = {
            messages: [],
        }
    }

    componentDidMount(){
        const { URL } = this.props;
        fetch(URL).
            then( response => response.json()).
            then( data => this.setState({ messages: data}));

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
            <Chathead title={'CHAT'}/>
            <Chatbox items={this.state.messages}/>
            <Chatinput handleSubmit={sendMessage}/>
        </div>
    }
}

ReactDom.render(<Layout  URL='http://localhost:3000/messages'/>, document.getElementById('root'));