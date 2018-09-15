import './Header.css'

import React, { Component, Fragment } from 'react';
import Menu from './../Menu/Menu'
import Login from './../Login/Login'



export default class Header extends Component {
  render() {
     return (
      <header>
        <Menu></Menu>
        <Login></Login>
      </header>
     );
  }
}