import './Room.css';

import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Room extends PureComponent {
  static propTypes = {
    user: PropTypes.object,
    messageCounter: PropTypes.number
  }
  render() {
    return (
      <div className="room">
        <Link to={`chat/${this.props.user.id}`} params={{id: this.props.user.id}}>
          <h3>{this.props.user.firstName}</h3>
          <p>You have {this.props.messageCounter} messages from this user</p>
        </Link>
      </div>
    );
  }
}
