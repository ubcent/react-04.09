import './Menu.scss';

import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends PureComponent {
    constructor(props){
        super(props);
        this.menu = [
            {
                display : 'Home',
                link: '/',
                id: 'home',
                icon: 'fa-home'
            },
            {
                display : 'Blog',
                link: '/blog',
                id: 'blog',
                icon: 'fa-book'
            },
            {
                display : 'Comments',
                link: '/comments',
                id: 'comments',
                icon: 'fa-comments-o'
            },
            {
                display : 'Users',
                link: '/users',
                id: 'users',
                icon: 'fa-users'
            }
        ];
    }
    navClicked = (event) =>{
        this.props.navClick(event.currentTarget.id);
    };
    
    render() {
        const {active,} = this.props;
        return (
            <nav className="col main-menu">
                <ul>
                    {this.menu.map((item, index)=>{
                        return <li key={index} className={item.id === active ? "active":""} id={item.id} onClick={this.navClicked}><Link to={item.link}>
                            <i className={"fa " + item.icon}></i>{item.display}</Link></li>;
                    })}
                </ul>
            </nav>
        );
    };
};
