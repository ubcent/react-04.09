import './Counter.css';

import React, { Component } from 'react';
import classNames from 'classnames';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blabala: 'blaba',
      iterator: 1,
    };
  }

  handleClick = (event) => {
    const addition = event.target.name === 'plus' ? 1 : -1;
    this.setState((prevState) => {
      return {
        ...prevState,
        iterator: prevState.iterator + addition,
      }
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: +event.target.value,
    });
  }

  render() {
    const { iterator } = this.state; 
    return (
      <div>
        <button name="minus" onClick={this.handleClick}>-</button>
        <input name="iterator" onChange={this.handleChange} type="text" value={iterator} />
        <button name="plus" onClick={this.handleClick}>+</button>
      </div>
    );
  }
}