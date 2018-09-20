//Импортируем стили для форматирования меню
import './Menu.scss';

import React, { PureComponent } from 'react';
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

export default class Menu extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            activeMenu: 0,
        };
    }

    //при клике на пункт меню, он становится активным
    clickMenu = (ev) => {
        this.setState({
            activeMenu: +ev.target.name,
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
        menu: PropTypes.arrayOf(PropTypes.object),
    }
    render() {
        const { isOpen, activeMenu } = this.state;//состояние открытового меню (сжатая версия)
        const { menu } = this.props;//получаем объект меню
        //строим навигацию на сайте (главная)
        return (
            <Navbar dark expand="md">
                <NavbarBrand href="/" className="logo">
                    <img src="./img/3d-logo.svg" alt="Блог о 3D и 2D" width="60" />
                    <span>Блог о 3D и 2D</span>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {menu.map( (item, indx)=>{
                            const activeClass = activeMenu === indx ? 'active-menu' : '';
                            //элементы главного меню
                            return(
                                <NavItem key={`mainMenu${indx}`} >
                                    <NavLink name={indx} onClick={this.clickMenu} className={activeClass}  href={item.link} >{item.title}</NavLink>
                                </NavItem>
                            );
                        })}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}