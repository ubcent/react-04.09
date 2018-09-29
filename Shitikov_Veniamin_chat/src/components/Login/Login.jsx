import './Login.css';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { submitLogin } from "../../actions/login";

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
    return (
      <div className="Login">
      <h1>Welcome to chat!</h1>
        <form onSubmit={this.handleSubmit }>
            <input type='text' onChange={this.handleChange} value={this.state.value} placeholder='Your name'/>
            <br />
            <button><Link to='/chat'>Login</Link></button>
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
