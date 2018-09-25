import './WindowForMessages.css';

import React, { PureComponent } from 'react';

import BubleWithMessage from 'components/BubleWithMessage';

import dialog from 'components/dialog';

const stylesForOponent = {
  textAlign: 'right',
};

const nonStyle = {
  color: '',
};

export default class WindowForMessages extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      messages: dialog,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.state.messages.push(nextProps);
  }

  render() {
    const myId = this.props.userId;
    return (
      <div id="messages" className="window-for-messages">
        {Object.keys(this.state.messages).map(key => {
          return (
            <BubleWithMessage
              key={key}
              name={this.state.messages[key].name}
              text={this.state.messages[key].text}
              style={
                this.state.messages[key].userId === myId
                  ? stylesForOponent
                  : nonStyle
              }
            />
          );
        })}
      </div>
    );
  }
}
