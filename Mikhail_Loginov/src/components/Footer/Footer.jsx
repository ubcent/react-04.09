import './Footer.css';

import React, {Component} from 'react';
import {Nav, NavItem, NavLink, Container} from 'reactstrap';

export default class Footer extends Component {

  render() {
    const menu = [
      {
        title: 'General info',
        href: '/'
      }, {
        title: 'Privacy',
        href: '#'
      }, {
        title: 'Policy',
        href: '#'
      }
    ];

    const navMenu = <Nav>
      {menu.map(item => <NavItem>
        <NavLink href={item.href}>{item.title}</NavLink>
      </NavItem>)}
    </Nav>

    return (
      <footer className="footer">
        <Container>
          {navMenu}
        </Container>
      </footer>
    );
  }
}