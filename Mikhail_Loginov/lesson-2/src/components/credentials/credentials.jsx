import React, { Component } from 'react';
import './credentials.css';

export default class Credentials extends Component {
    state = {
      firstName: 'Mikhail',
      lastName: 'Loginov',
    };

    render() {
      function clickHandler(e) {
        e.preventDefault();
        console.log("123");
      }
      return (
        <div href="#" className="credentials" onClick={clickHandler}>
          <p>Developer: {this.state.firstName} {this.state.lastName}</p>
        </div>
      );
    }
}
