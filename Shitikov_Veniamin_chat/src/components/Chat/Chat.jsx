import './Chat.css';

import React, {Fragment, PureComponent} from 'react';
import {connect} from "react-redux";

import Chathead from 'components/Chathead';
import Chatbox from 'components/Chatbox';
import Chatinput from 'components/Chatinput';

class Chat extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
      const visible = <Fragment>
          <Chathead />
          <Chatbox />
          <Chatinput />
      </Fragment>;
          const invisible = <h1>Page not found</h1>;
          const body = (this.props.isValid) ? visible : invisible;
          console.log(this.props);
    return (
      <div className="Chat">
          {body}
      </div>
    );
  }
}

export default connect((state, props) => {
    return {
        ...props,
        isValid: state.isValidUser,
    }
})(Chat)