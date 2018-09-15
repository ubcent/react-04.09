

import React, { Component, Fragment } from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';

import Header from 'components/Header'
import MainPage from 'components/pages/MainPage'
import Footer from 'components/Footer'

export class Layout extends Component {
  
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