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

import comments from '../../data/comments';
import Message from 'components/Message';

export default class Content extends Component {

  render() {
    const messagesSection = comments.map(message => <Message message={message}/>);
    return (
      <main>
        <Container>
          <div className="chat-wrapper">
            {messagesSection}
          </div >
          <Form>
            <div className="name-input-group">
              <FormGroup>
                <Label for="userName" hidden>Name</Label>
                <Input type="text" name="name" id="userName" placeholder="Enter your name"/>
              </FormGroup>
              <Button>Submit</Button>
            </div>
            <FormGroup>
              <Label for="commentInput" hidden>Comment</Label>
              <Input
                type="textarea"
                name="text"
                id="commentInput"
                placeholder="Your comment"/>
            </FormGroup>
          </Form>
        </Container>
      </main >
    );
  }
}
