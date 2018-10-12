import './Menu.scss';

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Menu extends Component {

    render() {
        const {active,} = this.props;
        return (
            <nav className="col main-menu">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName={"menu-active"}>
                            <i className={"fa " + "fa-home"}></i>Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" activeClassName={"menu-active"}>
                            <i className={"fa " + "fa-book"}></i>Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/comments" activeClassName={"menu-active"}>
                            <i className={"fa " + "fa-comments-o"}></i>Comments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" activeClassName={"menu-active"}>
                            <i className={"fa " + "fa-users"}></i>Users
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    };
};
