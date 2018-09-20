import './CommentsForm.css';

import React, { Component } from 'react';
import classNames from 'classnames';

export default class CommentsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      message: '',
    };
  }

  handleClick = (event) => {
    const { onSend } = this.props;

    onSend(this.state);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { author, message } = this.state; 
    return (
      <div>
        <input type="text" name="author" onChange={this.handleChange} value={author} /><br />
        <textarea name="message" onChange={this.handleChange} value={message}></textarea>
        <button onClick={this.handleClick}>Send</button>
      </div>
    );
  }
}