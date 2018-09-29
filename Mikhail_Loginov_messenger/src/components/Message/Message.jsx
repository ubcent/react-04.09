import './Message.css';

import React, {PureComponent} from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

export default class Message extends PureComponent {
  static propTypes = {
    message: PropTypes.object,
  }
  render() {
    const messageClass = ClassNames({
      'message': true,
      'message-yours': this.props.message.author.id === '1'  // Hardcoded
    })
    if (this.props.message.author.id === '1') {
      this.props.message.author.username = 'You';
    }
    let date = new Date(this.props.message.timestamp);
    return (
      <div className={messageClass}>
        <div className="message__text">
          {this.props.message.text}
        </div>
        <div className="message__name">
          {this.props.message.author.username}
          , at {date.getDate()}/{date.getMonth()+1}
        </div>
      </div>
    );
  }
}
