//Импортируем стили для форматирования меню
import './Menu.css';
import logoImg from './img/3d-logo.svg';

import React, { Component } from 'react';
import {//импортируем компоненты для навигации Bootstrap
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default class Menu extends Component {
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
            <Navbar light expand="md">
                <NavbarBrand href="/" className="logo">
                    <img src={logoImg} alt="Блог о 3D и 2D" width="60" />
                    <span>Блог о 3D и 2D</span>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="./">Главная</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">3D Графика</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">2D Графика</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Контакты</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}