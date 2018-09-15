import './Layout.css';

import React, { Component, Fragment } from 'react';
import classNames from 'classnames';

import Header from 'components/Header';
import MainPage from 'components/MainPage';

export default class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <Header size="small" />
        <div>{children}</div>
        <MainPage />
      </Fragment>
    );
  }
}
