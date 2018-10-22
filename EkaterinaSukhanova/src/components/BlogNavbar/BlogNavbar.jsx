import './BlogNavbar.css';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';

import React, {PureComponent} from 'react';
import classNames from 'classnames';

export default class BlogNavbar extends PureComponent {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="primary" light expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="divnavbar" navbar>
                            <NavItem>
                                <NavLink href="#">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">New features</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Press</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">New hires</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">About</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}