import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import Modal from "components/Modal";

// Компонент принимает объект со свойствами:
// brand - объект заголовка навбара со свойствами
//      title - заголовок и
//      href - ссылка
// items - массив объектов меню
export default class Header extends Component {

    static defaultProps = {
        brand: {
            href: '#',
            title: 'title'
        },
        items: []
    };

    render(){
        const { brand, items } = this.props;
        return <Navbar color="light" light expand="md">
            <NavbarBrand href={brand.href}>{brand.title}</NavbarBrand>
            <Nav className="ml-auto" navbar>
                {items.map( (item) => {
                    return <NavItem>
                        <NavLink key={item} href={item.href}>{item.title}</NavLink>
                    </NavItem>
                })}

            </Nav>
            <Modal/>
        </Navbar>
    }
}