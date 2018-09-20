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

import { SERVER_ADDRESS, SERVER_PORT } from '../../config/server.js';
import Message from 'components/Message';

export default class Content extends Component {
  state = {
    messageAuthor: '',
    messageText: '',
    messages: []
  }

  componentDidMount() {
    fetch(`${SERVER_ADDRESS}:${SERVER_PORT}/messages`).then(res => {
      console.log(res);
      res.json().then(res => {
        console.log(res);
        this.setState({messages: res});
      })
    })
  }

  handleNameInputChange = (e) => {
    this.setState({messageText: e.target.value});
  }

  handleMessageInputChange = (e) => {
    this.setState({messageAuthor: e.target.value});
  }

  handleSubmitClick = () => {
    let message = {
      text: this.state.messageText,
      author: this.state.messageAuthor
    }
    fetch(`${SERVER_ADDRESS}:${SERVER_PORT}/messages`, {
      method: "POST",
      body: message
    }).then(res => {
      console.log(res);
      res.json().then(res => {
        console.log(res);
        this.setState({messages: res});
      })
    })
    this.forceUpdate();
  }

  render() {
    const renderedMessages = this.state.messages.map((message, index) => <Message key={index} message={message}/>);
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
                <Input type="text" name="name" id="userName" placeholder="Enter your name"
                onChange={this.handleNameInputChange}/>
              </FormGroup>
              <Button onClick={this.handleSubmitClick}>Submit</Button>
            </div>
            <FormGroup>
              <Label for="commentInput" hidden>Message</Label>
              <Input
                type="textarea"
                name="text"
                id="commentInput"
                placeholder="Your message"
                onChange={this.handleMessageInputChange}/>
            </FormGroup>
          </Form>
        </Container>
      </main >
    );
  }
}
