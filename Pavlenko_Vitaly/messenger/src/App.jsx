import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

import MessengerContainer from 'components/MessengerContainer';
import ContactHeader from 'components/ContactHeader';
import SendGroup from 'components/SendGroup';
import Messages from 'components/Messages';

export default class App extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            author: 111,
        };
    }

    handleMessagesReceive = (message) => {
        this.sendMessage(message, this.state.author);
    }

    sendMessage(message, author) {
        this.setState((prevState) => {
            return {
                ...prevState,
                messages: prevState.messages.concat([{
                    'body': message,
                    'author': author,
                }])
            }
        });
    }

    componentDidMount() {
        this.testingSendMesseges();
    }

    testingSendMesseges() {
        setInterval(() => {
            fetch(`https://jsonplaceholder.typicode.com/albums/${Math.floor(Math.random() * 99) + 1}`)
                .then((res) => {
                    return res.json();
                }).then((data) => {
                    this.sendMessage(data.title, data.userId);
                }).catch((err) => {
                    console.error(err);
                });
        }, 2000);
    }

    render() {

        return (
            <MessengerContainer>
                <ContactHeader name="Имя собеседника"/>
                <Messages messages={this.state.messages} author={this.state.author}/>
                <SendGroup onSend={this.handleMessagesReceive}/>
            </MessengerContainer>
        );
    }
}

ReactDom.render(<App/>, document.querySelector('#app'));