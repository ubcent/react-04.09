import './SendGroup.scss';

import React, {Component} from 'react';

export default class SendGroup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    addMessage = (event) => {
        event.preventDefault();
        if (this.state.message) {
            this.props.handlerMessage(this.state.message);
            this.setState({ message: '' });
        }
    }

    render() {
        return (
            <nav className="send-group messenger__send-group">
                <form action="" id="send-left" onSubmit={this.addMessage}>
                    <div className="input-group">
                        <input name="message" type="text" className="send-input input-group__input" placeholder="Введите сообщение" onChange={this.handleChange} value={this.state.message}/>
                        <input type="submit" value="Отправить" className="button-send input-group__button"/>
                    </div>
                </form>
            </nav>
        );
    }
}