import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle,
        DropdownMenu, DropdownItem, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import React from 'react';

export default class Example extends React.Component {
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
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="#">Homework #3</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Главное</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Важное</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Путешествия</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Развлечения</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Войти
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Form>
                                        <FormGroup row>
                                            <Label for="exampleEmail" sm={5}>Email:</Label>
                                            <Col sm={12}>
                                                <Input type="email" name="email" id="exampleEmail" placeholder="email" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="examplePassword" sm={5}>Password:</Label>
                                            <Col sm={12}>
                                                <Input type="password" name="password" id="examplePassword" placeholder="password" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup check row>
                                            <Col sm={{ size: 10, offset: 2 }}>
                                                <Button>Submit</Button>
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}