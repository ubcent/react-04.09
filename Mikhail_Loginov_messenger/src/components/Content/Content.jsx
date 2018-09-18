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

import messages from '../../data/messages';
import Message from 'components/Message';

export default class Content extends Component {
  state = {
    messageAuthor: '',
    messageText: ''
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
    messages.push(message);
    this.forceUpdate();
  }

  render() {
    const renderedMessages = messages.map(message => <Message message={message}/>);
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
