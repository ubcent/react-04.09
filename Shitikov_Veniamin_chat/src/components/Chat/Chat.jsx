import './Chat.css';

import React, {Fragment, PureComponent} from 'react';
import {connect} from "react-redux";

import Chathead from 'components/Chathead';
import Chatbox from 'components/Chatbox';
import Chatinput from 'components/Chatinput';

class Chat extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
      const visible = <Fragment>
          <Chathead />
          <Chatbox />
          <Chatinput />
      </Fragment>;
          const invisible = <h1>Page not found</h1>;
          const body = (this.props.isValid) ? visible : invisible;
    return (
      <div className="Chat">
          {body}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        isValid: state.login.isValidUser,
    }
}

export default connect(mapStateToProps, null)(Chat);