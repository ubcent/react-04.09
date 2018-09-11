import React, { Component } from 'react';
import './credentials.css';

export default class Credentials extends Component {
    state = {
      firstName: 'Mikhail',
      lastName: 'Loginov',
      date: '',
    };

    getCurrentDate = () => this.setState({ date: `Current Time is ${(new Date).toString()}`});

    clickHandler = e => {
      e.preventDefault();
      this.getCurrentDate();
    }

    render() {
      return (
        <div className="credentials" onClick={this.clickHandler}>
          <p>Developer: {this.state.firstName} {this.state.lastName}</p>
          <p>{this.state.date}</p>
        </div>
      );
    }
}
