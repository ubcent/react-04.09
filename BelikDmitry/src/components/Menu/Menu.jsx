import './Menu.css'

import React, { Component } from 'react';

const lists_of_menu = [
    'Главная',
    'Новости',
    'Категории',
    'Последние статьи',
    'Об авторе'
];

export default class Menu extends Component {
  render() {
     return (
      <nav>
          <ul className="menu">
            {lists_of_menu.map((el, key) => 
                <li key={key} className="menu-item"><a href="#">{el}</a></li>
            )}
        </ul>
      </nav>
     );
  }
}