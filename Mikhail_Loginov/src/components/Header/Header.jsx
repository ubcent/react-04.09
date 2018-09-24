import './Header.css';

import React, {PureComponent} from 'react';
import {
  Nav,
  NavItem,
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
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import propTypes from 'prop-types';

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      activeLink: '/',
    };
  }

  static propTypes = {
    className: propTypes.string,
    buttonLabel: propTypes.string,
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleNavItemClick = e => {
    // Cutting last part of a web address
    let href = e.target.href.replace(/^https?:\/\/[^/]+/i, "");
    this.setState({activeLink: href});
  }

  render() {
    const menu = [
      {
        title: 'Main Page',
        href: '/'
      }, {
        title: 'Blog',
        href: '/blog/'
      }, {
        title: 'Comments',
        href: '/comments/'
      }, {
        title: 'Users',
        href: '/users/'
      }
    ];

    const navMenu = 
      <Nav>
        {menu.map((item, index) => {
          let linkClass = classNames({
            'nav-link': true,
            'active': item.href === this.state.activeLink,
          });
          return <NavItem key={index}> 
            <Link to={item.href} className={linkClass}
              onClick={this.handleNavItemClick}>{item.title}
            </Link>
          </NavItem>
        })}
      </Nav>;

    const modalWindow = 
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
      </Modal>;

    return (
      <header className="header">
        <Container>
          {navMenu}
          <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}Login</Button>
          {modalWindow}
        </Container>
      </header>
    );
  }
}
