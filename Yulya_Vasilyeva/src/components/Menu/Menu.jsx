//Импортируем стили для форматирования меню
import './Menu.scss';

import React, { PureComponent } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import {//импортируем компоненты для навигации Bootstrap
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

class Menu extends PureComponent {
    render() {
        const { menu, toggle, isOpen, clickMenu, location } = this.props;
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
                            const activeIndex = item.link !== location.pathname ? '' : ' active-menu';
                            //элементы главного меню
                            return(
                                <NavItem key={`mainMenu${item.id}`} >
                                    <NavLink to={item.link} onClick={clickMenu} className={`nav-link${activeIndex}`}>{item.title}</NavLink>
                                </NavItem>
                                
                            );
                        })}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
export default withRouter(Menu);