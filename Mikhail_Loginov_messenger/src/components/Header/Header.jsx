import './Header.css';

import React, {PureComponent} from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from 'reactstrap';
import PropTypes from 'prop-types';

export default class Header extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    buttonLabel: PropTypes.string,
  }

  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const modalWindow = <Modal
      isOpen={this.state.modal}
      toggle={this.toggle}
      className={this.props.className}>
      <ModalHeader toggle={this.toggle}>Authentication</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="formLogin">Login</Label>
            <Input type="text" name="login" id="formLogin" placeholder="enter your login"/>
          </FormGroup>
          <FormGroup>
            <Label for="formPassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="formPassword"
              placeholder="enter your password"/>
          </FormGroup>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Form>
      </ModalBody>
    </Modal>

    return (
      <header className="header">
        <Container>
          <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}Login</Button>
          {modalWindow}
        </Container>
      </header>
    );
  }
}