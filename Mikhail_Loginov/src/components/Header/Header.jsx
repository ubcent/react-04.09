import './Header.css';

import React, {Component} from 'react';
import {
  Nav,
  NavItem,
  NavLink,
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

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this
      .toggle
      .bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const menu = [
      {
        title: 'MainPage',
        href: '/'
      }, {
        title: 'About',
        href: '#'
      }, {
        title: 'Contacts',
        href: '#'
      }
    ];

    return (
      <header className="header">
        <Container>
          <Nav>
            {menu.map(item => <NavItem>
              <NavLink href={item.href} key={item.id}>{item.title}</NavLink>
            </NavItem>)}
          </Nav>
          <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}Login</Button>
          <Modal
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
        </Container>
      </header>
    );
  }
}