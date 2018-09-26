import './Menu.css'

import React, { PureComponent} from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends PureComponent{
    render(){
        return(
            <nav className="menu-block">
                <ul className="menu">
                    <li className="menu__item"><Link className="menu__link" to="/">Home</Link></li>
                    <li className="menu__item"><Link className="menu__link" to="/blog">Blogs</Link></li>
                    <li className="menu__item"><Link className="menu__link" to="/comments">Comments</Link></li>
                    <li className="menu__item"><Link className="menu__link" to="/users">Users</Link></li>
                </ul>
            </nav>
        )
    }
}