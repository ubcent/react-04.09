import './Login.css';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { submitLogin } from "../../actions/messages";

class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
        value: '',
    };
  }

  handleChange = (event) => {
      this.setState({
          value: event.target.value,
      });
  };

  handleSubmit = (event) => {
      this.props.submitLogin(this.state.value);
      event.preventDefault();
  };

  render() {
      const { handleSubmit } = this.props;
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit }>
            <input type='text' onChange={this.handleChange} value={this.state.value} placeholder='Your name'/>
            <br />
            <button>Login</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return props;
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        submitLogin: submitLogin(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)