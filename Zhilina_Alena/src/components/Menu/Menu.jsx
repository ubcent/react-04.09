import './Menu.css'

import React, { Component } from 'react';
import classNames from 'classnames';

import Button from 'components/Button';

export default class Menu extends Component{

    render(){
        const {items} = this.props;

        const menuBlockClasses = classNames('menu-block','header__menu-block');
        const menuClasses = classNames('menu', 'menu-block__menu');
        const menuItemClasses = classNames('menu__item');
        const menuLink = classNames('menu__link', 'menu__link_hover');

        console.log(menuBlockClasses);
        return(
            <nav className = {menuBlockClasses}>
                <ul className = {menuClasses}>
                    {items.map((item) =>
                        <li key = {item} className = {menuItemClasses}>
                            <a className = {menuLink} href = '#'>{item}</a>
                        </li>)}
                </ul>

                <Button name = 'Login' parent = 'menu-block'/>
            </nav>
        );
    }
}