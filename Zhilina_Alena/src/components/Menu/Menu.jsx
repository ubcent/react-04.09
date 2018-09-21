import './Menu.css'

import React, { PureComponent} from 'react';

export default class Menu extends PureComponent{

    constructor(props){
        super(props);

        this.state={
            page: '/home',
        };
    }

    handleClick = (event) =>{
        this.setState({
            page: event.target.name,
        });
        const { onSend } = this.props;
        onSend(event.target.name);
    };

    render(){

        return(
            <nav className="menu-block">
                <ul className="menu">
                    <li className="menu__item"><a className="menu__link" href="#" name="/home" onClick={this.handleClick}>Home</a></li>
                    <li className="menu__item"><a className="menu__link" href="#" name="/blog" onClick={this.handleClick}>Blog</a></li>
                    <li className="menu__item"><a className="menu__link" href="#" name="/comments" onClick={this.handleClick}>Comments</a></li>
                    <li className="menu__item"><a className="menu__link" href="#" name="/users" onClick={this.handleClick}>Users</a></li>
                </ul>
            </nav>
        )
    }
}