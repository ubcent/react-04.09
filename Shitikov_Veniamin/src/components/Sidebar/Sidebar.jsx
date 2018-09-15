import React, { Component } from 'react';

// Компонент принимает объект со свойствами:
// items - массив объектов бокового меню
//      title - заголовок и
//      href - ссылка
export default class Sidebar extends Component {

    static defaultProps = {
        items: []
    };

    render(){
        const { items } = this.props;
        return <nav className="col-md-2 d-md-block bg-secondary sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    {items.map( (item) => {
                        return <li className="nav-item">
                            <a className="nav-link text-light" href={item.href}>
                                {item.title}
                            </a>
                        </li>
                    })}
                </ul>
            </div>
        </nav>
    }
}

