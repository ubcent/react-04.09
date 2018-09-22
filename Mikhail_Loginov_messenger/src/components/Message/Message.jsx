import './Message.css';

import React, {PureComponent} from 'react';

export default class Message extends PureComponent {

  render() {
    return (
      <div className="message">
        <div className="message__text">
          {this.props.message.text}
        </div>
        <div className="message__name">
          {this.props.message.author}
        </div>
      </div>
    );
  }
}
