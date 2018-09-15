import React, { Component, Fragment } from 'react';
import Header from './Header';
import MainPage from './MainPage';
// import Footer from './Footer';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <MainPage />
      </Fragment>
    );
  }
}

export default Layout;
