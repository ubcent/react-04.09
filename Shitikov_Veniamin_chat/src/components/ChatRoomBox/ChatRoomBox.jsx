import './ChatRoomBox.css';

import React, { PureComponent } from 'react';

export default class ChatRoomBox extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { chats } = this.props;
    return (
      <div className="ChatRoomBox">
        <ul>
                {chats.map( (item) => {
                    return <li key={item.user}  onClick={()=> this.props.handleClick(item)}>{item.user}</li>
                })}
            </ul>
      </div>
    );
  }
}
