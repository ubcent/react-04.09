import './Header.scss';

import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Header extends Component {
    
    static propTypes = {
        fixed: PropTypes.bool,
    }

    static defaultProps = {
        fixed: false,
    };

   

    render() {
        const { fixed } = this.props;
        const headerClass = classNames('header', {
            'header--fixed': fixed,
        });

        return (
            <header className={headerClass}>
            
                <Navbar>
                    <Container>
                        <NavbarBrand href="/">
                            ReactApp
                        </NavbarBrand>
                        <Nav>
                            <NavItem>
                                <Link className="nav-link" to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/comments">Comments</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/users">User</Link>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>

            </header>
        );
    }
}
