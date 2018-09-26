//Импортируем стили для форматирования меню
import './Menu.scss';

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

import {Link} from 'react-router-dom';

export default class Menu extends Component {
    render() {
        const { activeMenu, menu, toggle, isOpen, clickMenu } = this.props;
        return (
            <Navbar dark expand="md">
                <NavbarBrand href="/" className="logo">
                    <img src="./img/3d-logo.svg" alt="Блог о 3D и 2D" width="60" />
                    <span>Блог о 3D и 2D</span>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {menu.map( item =>{
                            const activeClass = activeMenu === item.id ? 'active-menu' : '';
                            //элементы главного меню
                            return(
                                <NavItem key={`mainMenu${item.id}`} >
                                    <NavLink tag={Link} to={item.link} name={item.id} onClick={clickMenu} className={activeClass}>{item.title}</NavLink>
                                </NavItem>
                            );
                        })}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}