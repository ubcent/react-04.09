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

export default class Content extends Component {

  render() {

    const commentsSection = comments.map(item => <div className="comment">
      <div className="comment__text">
        {item.text}
      </div>
      <div className="comment__name">
        {item.userName}
      </div>
    </div>);
    return (
      <main>
        <Container>
          <div className="chat-wrapper">
            {commentsSection}
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
