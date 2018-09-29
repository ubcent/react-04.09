import './Chat.css';

import React, { PureComponent } from 'react';

import Chathead from 'components/Chathead';
import Chatbox from 'components/Chatbox';
import Chatinput from 'components/Chatinput';

export default class Chat extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Chat">
        <Chathead />
        <Chatbox />
        <Chatinput />
      </div>
    );
  }
}
