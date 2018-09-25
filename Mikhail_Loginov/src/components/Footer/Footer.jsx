import './Footer.css';

import React, {PureComponent} from 'react';
import {Nav, NavItem, Container} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Footer extends PureComponent {
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

    const navMenu = <Nav>
      {menu.map((item, index) => <NavItem key={index}>
        <Link to={item.href} className="nav-link">{item.title}</Link>
      </NavItem>)}
    </Nav>;

    return (
      <footer className="footer">
        <Container>
          {navMenu}
        </Container>
      </footer>
    );
  }
}
