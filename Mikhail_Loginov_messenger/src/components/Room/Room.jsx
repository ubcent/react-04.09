import './Room.css';

import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';

export default class Room extends PureComponent {
  static propTypes = {
    user: propTypes.object,
    messageCounter: propTypes.number,
    dialogId: propTypes.number,
  }
  render() {
    return (
      <div className="room">
        <Link to={`chat/${this.props.dialogId}`} params={{dialogId: +this.props.dialogId}}>
          <h3>{this.props.user.username}</h3>
          <p>You have {this.props.messageCounter} messages from this user</p>
        </Link>
      </div>
    );
  }
}
