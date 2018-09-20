import './SendGroup.scss';

import React, { PureComponent } from 'react';

import InputGroup from 'components/InputGroup';

export default class SendGroup extends PureComponent {

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

    sendMessage = (event) => {
        event.preventDefault();
        if (this.state.message) {
            this.props.onSend(this.state.message);
            this.setState({ message: '' });
        }
    }

    render() {
        return (
            <form className="send-group" action="" id="send-left" onSubmit={this.sendMessage}>
                <InputGroup>
                    <input name="message" type="text" className="input-group__input" placeholder="Введите сообщение" onChange={this.handleChange} value={this.state.message}/>
                    <input type="submit" value="Send" className="input-group__button"/>
                </InputGroup>
            </form>
        );
    }
}