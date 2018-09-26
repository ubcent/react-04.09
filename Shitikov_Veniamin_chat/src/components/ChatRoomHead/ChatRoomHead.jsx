import './ChatRoomHead.css';

import React, { PureComponent } from 'react';

export default class ChatRoomHead extends PureComponent {
  constructor(props) {
    super(props);

  }

  static defaultProps = {
    title: 'My Chat Room',
  };

  render() {
    const { title } = this.props;

    return (
      <div className="ChatRoomHead">{title}</div>
    );
  }
}
