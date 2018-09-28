import './Navtop.css'

import React, { PureComponent } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input} from 'reactstrap';

//собственные модули

export default class Navtop extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true,
            modal: false,
        };
    }
    toggleNavbar = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                collapsed: !this.state.collapsed,
            }
        });
    };
    toggleModal = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                modal: !this.state.modal,
            }
        });
    };
    static propTypes = {
        position: PropTypes.oneOf(['fix', 'content']),
    };

    static defaultProps = {
        categories: [],
    };

    render() {
        const { size, categories, children } = this.props;
        const navClasses = ClassNames('nav', {
            'nav-small': size === 'small',
            'nav-big': size === 'big',
        });

        return (
                <Navbar className={navClasses} color="faded" light >
                    <NavbarBrand href="/" className="mr-auto">Eremenko</NavbarBrand>
                    <NavItem>
                        <Button color="danger" onClick={this.toggleModal}>Log in</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                            <ModalHeader toggle={this.toggleModal}>Log in</ModalHeader>
                            <ModalBody>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                                    <Input placeholder="username" />
                                </InputGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggleModal}>Log in</Button>{' '}
                                <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </NavItem>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="https://reactstrap.github.io/components/" target="_blank">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/SerSerch/react-04.09/tree/Eremenko/Eremenko" target="_blank">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
        );
    }
}