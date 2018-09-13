import './Layout.css';

import React, { Component } from 'react';

import MainPage from 'components/MainPage';

export default class Layout extends Component {

    render() {
      
      return (
        <div className="layout">
          <MainPage />
        </div>
      );
    }
}