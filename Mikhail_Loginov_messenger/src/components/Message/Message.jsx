import './Message.css';

import React, {Component} from 'react';

export default class Message extends Component {

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
