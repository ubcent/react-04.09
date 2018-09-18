import './Header.css'

import React, { Component } from 'react';

const lists_of_menu = [
    'home',
    'new features',
    'press',
    'new hires',
    'about'
];

let menu = [];
menu[0] = <li key={lists_of_menu[0]}><a className="blog-nav-item active" href="#">{lists_of_menu[0]}</a></li>;
for(let i = 1; i < lists_of_menu.length; i++) {
  menu[i] = <li key={lists_of_menu[i]}><a className="blog-nav-item" href="#">{lists_of_menu[i]}</a></li>;
}

export default class Header extends Component {
  render() {
     return (
      <header className='blog-masthead'>
        <div className="container">
          <nav>
            <ul className="blog-nav">
              {menu}
            </ul>
          </nav>
        </div>    
      </header>
     );
  }
}