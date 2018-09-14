import './Page.css';

import React, { Component } from 'react';
import classNames from 'classnames';

import Header from 'components/Header';
import Content from 'components/Content';
import Aside from 'components/Aside';

const menus = ['Главная', 'Обо мне', 'Портфолио', 'Контакты'];

export default class Page extends Component {
    render() {
        const pageClass = classNames('container');
        return(
            <div className={pageClass}>
              <Header size="small" menus={menus}></Header>
              <Aside></Aside>
              <Content></Content>
            </div>
        );
    }
}