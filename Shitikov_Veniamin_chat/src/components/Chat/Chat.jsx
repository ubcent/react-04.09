import './Chat.css';

import React, {Fragment, PureComponent} from 'react';
import {connect} from "react-redux";

import Chathead from 'components/Chathead';
import Chatbox from 'components/Chatbox';
import Chatinput from 'components/Chatinput';

class Chat extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
      const visible = <Fragment>
          <Chathead />
          <Chatbox />
          <Chatinput />
      </Fragment>;
            const cookie = document.cookie.includes('login=true');
          const isValid = cookie || this.props.isValid;
          const invisible = <h1>Page not found</h1>;
          const body = (isValid) ? visible : invisible;
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