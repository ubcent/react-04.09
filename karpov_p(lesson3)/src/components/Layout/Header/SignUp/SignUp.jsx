import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div>
        <Button className = "btn-outline-secondary" onClick={this.toggle}>Log In</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Вход в личный кабинет</ModalHeader>
          <Form className = "p-3">
            <FormGroup>
              <Label for="exampleEmail" className="mr-sm-2">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword" className="mr-sm-2">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="top secret" />
            </FormGroup>
            <Button className = "btn-block">Submit</Button>
          </Form>
        </Modal>
      </div>
    );
  }
}