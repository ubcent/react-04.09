

import React, { Component, Fragment } from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';

import Header from './../components/Header/Header'
import MainPage from './../pages/MainPage/MainPage'
import Footer from './../components/Footer/Footer'

export default class Layout extends Component {
  
  render() {
    return (
      <Fragment>
        <Header />
        <MainPage />
        <Footer />
      </Fragment>
    );
  }
}