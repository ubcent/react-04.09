import './Content.css';

import React, {Component} from 'react';
import {Container} from 'reactstrap';

export default class Credentials extends Component {
  state = {
    date: ''
  };

  getCurrentDate = () => this.setState({
    date: `Current Time is ${ (new Date).toString()}`
  });

  clickHandler = e => {
    e.preventDefault();
    this.getCurrentDate();
  }

  render() {
    const firstName = 'Mikhail';
    const lastName = 'Loginov';

    return (
      <main>
        <Container>
          <div className="credentials" onClick={this.clickHandler}>
            <p>Developer: {firstName}
              {lastName}</p>
            <p>{this.state.date}</p>
          </div>
        </Container>
      </main>
    );
  }
}