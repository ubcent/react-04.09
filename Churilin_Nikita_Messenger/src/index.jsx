import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import WindowForMessages from 'components/WindowForMessages';
import InputForMessage from 'components/InputForMessage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: [],
    };
  }

  getMessage = value => {
    this.setState({
      message: value,
    });
  };

  render() {
    const userId = '111111';
    let name = 'Nikita';
    return (
      <Fragment>
        <WindowForMessages
          name={name}
          text={this.state.message}
          userId={userId}
        />
        <InputForMessage getMessage={this.getMessage} />
        <h1>{this.state.messages}</h1>
      </Fragment>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
