import './MainPage.css';

import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class MainPage extends Component {

    render() {
        const menu = ['MainPage', 'About', 'Contacts'];
      
      return (
        <div className="main-page">
          <Nav>
                {menu.map(item => 
                    <NavItem>
                        <NavLink href="#">{item}</NavLink>
                    </NavItem>
                )}
          </Nav>
        </div>
      );
    }
}