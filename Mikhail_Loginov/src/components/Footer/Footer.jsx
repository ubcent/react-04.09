import './Footer.css';

import React, {Component} from 'react';
import {Nav, NavItem, NavLink, Container} from 'reactstrap';

export default class Header extends Component {

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

    return (
      <footer className="footer">
        <Container>
          <Nav>
            {menu.map(item => <NavItem>
              <NavLink href={item.href}>{item.title}</NavLink>
            </NavItem>)}
          </Nav>
        </Container>
      </footer>
    );
  }
}