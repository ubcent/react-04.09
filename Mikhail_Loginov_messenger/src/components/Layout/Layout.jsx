import './Layout.css';

import React, {PureComponent, Fragment} from 'react';

import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';

export default class Layout extends PureComponent {

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
