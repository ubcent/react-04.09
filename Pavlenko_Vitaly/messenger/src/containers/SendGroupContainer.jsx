import React, {PureComponent} from 'react';

import SendGroup from 'components/SendGroup';
import InputGroup from 'components/InputGroup';

export default class SendGroupContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            message: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSend = (e) => {
        if (this.state.message) {
            this.props.handleSend(this.state.message);
            this.setState({message: ''});
        }
        document.querySelector('.messages').scrollIntoView(false);
        e.preventDefault();
    }

    render() {
        return (
            <SendGroup sendMessage={this.handleSend}>
                <InputGroup>
                    <input
                        name="message"
                        type="text"
                        className="input-group__input"
                        placeholder="Введите сообщение"
                        onChange={this.handleChange}
                        value={this.state.message} />
                    <input
                        type="submit"
                        value="Send"
                        className="input-group__button" />
                </InputGroup>
            </SendGroup>
        );
    }
}