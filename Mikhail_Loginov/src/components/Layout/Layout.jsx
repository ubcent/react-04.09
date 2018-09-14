import './Layout.css';

import React, {Component, Fragment} from 'react';

import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';

export default class Layout extends Component {

  render() {

    return (
      <Fragment>
        <Header/>
        <Content/>
        <Footer/>
      </Fragment>
    );
  }
}