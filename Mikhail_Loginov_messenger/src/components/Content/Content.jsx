import './Content.css';

import React, {Component} from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container
} from 'reactstrap';

import {SERVER_ADDRESS, SERVER_PORT} from '../../config/server.js';
import Message from 'components/Message';

export default class Content extends Component {
  state = {
    messageAuthor: '',
    messageText: '',
    messages: [],
  }

  componentDidMount() {
    fetch(`${SERVER_ADDRESS}:${SERVER_PORT}/messages`).then(res => {
      res.json().then(res => {
          this.setState({messages: res});
        })
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmitClick = () => {
    let message = {
      text: this.state.messageText,
      author: this.state.messageAuthor
    }
    fetch(`${SERVER_ADDRESS}:${SERVER_PORT}/messages`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(message)
    }).then(res => {
      res
        .json()
        .then(res => {
          console.log(res);
          let updatedMessages = this.state.messages.concat(res);
          console.log(updatedMessages);
          this.setState({messages: updatedMessages});
        })
    });
    this.setState({messageAuthor: '', messageText: ''});
  }

  render() {
    const renderedMessages = this
      .state
      .messages
      .map((message, index) => <Message key={index} message={message}/>);
    return (
      <main>
        <Container>
          <div className="chat-wrapper">
            {renderedMessages}
          </div >
          <Form>
            <div className="name-input-group">
              <FormGroup>
                <Label for="userName" hidden>Name</Label>
                <Input
                  type="text"
                  name="messageAuthor"
                  id="userName"
                  placeholder="Enter your name"
                  onChange={this.handleChange}
                  value={this.state.messageAuthor}/>
              </FormGroup>
              <Button onClick={this.handleSubmitClick}>Submit</Button>
            </div>
            <FormGroup>
              <Label for="commentInput" hidden>Message</Label>
              <Input
                type="textarea"
                name="messageText"
                id="messageInput"
                placeholder="Your message"
                onChange={this.handleChange}
                value={this.state.messageText}/>
            </FormGroup>
          </Form>
        </Container>
      </main >
    );
  }
}
