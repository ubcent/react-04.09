import './InputForMessage.css';

import React, { PureComponent } from 'react';

export default class InputForMessage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      myMessage: '',
    };
  }

  sendMessage = event => {
    event.preventDefault();
    this.props.getMessage(this.state.myMessage);
    this.setState({
      myMessage: '',
    });
  };

  myMessage = event => {
    this.setState({
      myMessage: event.target.value,
    });
  };

  render() {
    return (
      <form id="send" onSubmit={this.sendMessage} className="input-for-message">
        <input
          onChange={this.myMessage}
          type="text"
          value={this.state.myMessage}
        />
        <button type="submit">>></button>
      </form>
    );
  }
}
