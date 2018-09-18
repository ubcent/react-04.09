import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Messenger from 'components/Messenger';

const messages = [
    {
        "body": "Привет, Катя!",
        "author": "Ivan",
    },
    {
        "body": "Приветик, Вань",
        "author": "Ekat",
    },
    {
        "body": "Что ты, как ты",
        "author": "Ivan",
    },
    {
        "body": "Нормуль",
        "author": "Ekat",
    },
    {
        "body": "Ты как?",
        "author": "Ekat",
    },
    {
        "body": "Плохо(",
        "author": "Ivan",
    },
    {
        "body": "Что случилось???",
        "author": "Ekat",
    },
    {
        "body": "Болею. Ломает всего уже второй день. Может вирус какой? Или погода меняется... ",
        "author": "Ivan",
    },
    {
        "body": "Ну ты даешь! Давай не болей там)) Выздоравливай!",
        "author": "Ekat",
    }
];
export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: messages
        };

        this.addMessage = this.addMessage.bind(this);
    }

    addMessage(message, author) {
        let newMessage = {
            'body': message,
            'author': author,
        };

        this.setState(prevState => ({
            messages: [...prevState.messages, newMessage]
        }));
    }

    render() {

        return (
            <div className="messager-app">
                <Messenger side="left" name="Иван Пальчиков" author="Ivan" messages={this.state.messages} addMessage={this.addMessage}/>
                <Messenger side="right" name="Екатерина Моськина" author="Ekat" messages={this.state.messages} addMessage={this.addMessage}/>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.querySelector('#app'));