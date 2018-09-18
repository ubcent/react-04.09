//Импортируем стили для форматирования меню
import './Menu.scss';
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
//проверка свойств
import PropTypes from 'prop-types';

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            activeMenu: 0,
        };
    }

    //при клике на пункт меню, он становится активным
    clickMenu = (indx) => {
        const { activeMenu } = this.state;
        this.setState({
            activeMenu: indx,
        });
    }

    //появление / скрытие коллапс меню
    toggle = () => {
        const { isOpen } = this.state;
        this.setState({
            isOpen: !isOpen,
        });
    }
    static propTypes = {
        //пункты меню должны быть строкой
        menu: PropTypes.arrayOf(PropTypes.string),
    }
    render() {
        const { isOpen, activeMenu } = this.state;//состояние открытового меню (сжатая версия)
        const { menu } = this.props;//получаем массив меню
        //строим навигацию на сайте (главная)
        return (
            <Navbar dark expand="md">
                <NavbarBrand href="/" className="logo">
                    <img src={logoImg} alt="Блог о 3D и 2D" width="60" />
                    <span>Блог о 3D и 2D</span>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {menu.map( (item, indx)=>{
                            const activeClass = activeMenu === indx ? 'active-menu' : '';
                            //элементы главного меню
                            return(
                                <NavItem key={"mainMenu" + indx} >
                                    <NavLink key={"mainMenuLink"+ indx} onClick={() => this.clickMenu(indx)} className={activeClass}  href="#" >{item}</NavLink>
                                </NavItem>
                            );
                        })}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}