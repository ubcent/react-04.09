import './Login.css';

import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import { submitLogin } from "../../actions/login";

class Login extends PureComponent {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            value: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    handleSubmit = () => {
        this.props.submitLogin(this.state.value);
        document.cookie='login=true';
    };

    render() {
        return (
            <div className="Login">
                <h1>Welcome to chat!</h1>

                <input type='text' onChange={this.handleChange} value={this.state.value} placeholder='Your name'/>
                <br/>
                <Link to='/chat'>
                    <button onClick={this.handleSubmit}>Login</button>
                </Link>

            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitLogin: submitLogin(dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Login);
