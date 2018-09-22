import './Header.css'

import React, {Component} from 'react';
import classNames from 'classnames';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

export default class Header extends Component{
    render(){
        const headerClasses = classNames('header');

        return(
            <header className={headerClasses}>
                <div className="contaier">
                    <Navbar className="navbar navbar-expand-lg navbar-dark">
                        <NavbarBrand className="navbar-brand" href="#">Brand</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Main page</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Contacts</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>

            </header>
        )
    }
}