import './Header.scss';

import React, { PureComponent } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Header extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            active: 'Home',
        }
    }
    
    static propTypes = {
        fixed: PropTypes.bool,
        onChangePage: PropTypes.func
    }

    static defaultProps = {
        fixed: false,
    };

   

    render() {
        const { fixed, onChangePage } = this.props;
        const headerClass = classNames('header', {
            'header--fixed': fixed,
        });

        const handlerClick = (ev) => {
            console.log(ev.target.getAttribute('data-event') === 'changePage')
            if (ev.target.getAttribute('data-event') === 'changePage') {
                onChangePage(ev.target.getAttribute('name'));
                this.setState({
                    ...this.state,
                    active: ev.target.getAttribute('name'),
                });
            }
        };

        return (
            <header className={headerClass}>
            
                <Navbar>
                    <Container>
                        <NavbarBrand href="/">
                            ReactApp
                        </NavbarBrand>
                        <Nav>
                            <NavItem>
                                <NavLink data-event="changePage" onClick={handlerClick} name="Home" href="#">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink data-event="changePage" onClick={handlerClick} name="Blog" href="#">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink data-event="changePage" onClick={handlerClick} name="Comments" href="#">Comments</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink data-event="changePage" onClick={handlerClick} name="Users" href="#">Users</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/AntoxaVolkov">My GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>

            </header>
        );
    }
}
