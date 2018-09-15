import React, { Component } from 'react';

import Sidebar from 'components/Sidebar';

// Компонент принимает объект со свойствами:

// navItems - массив объектов бокового меню
//      title - заголовок и
//      href - ссылка
// content - основной контент
export default class Main extends Component{
    render(){
        const { navItems, content } = this.props;
        return <main>
            <div className="row">
                <Sidebar items={navItems}/>
                <div className="col-md-10">
                    {content}
                </div>
            </div>
        </main>
    }
}