import './index.css'
import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Page from './pages/MainPage/MainPage'

class App extends Component {
  render() {
    return (
      <Fragment>
       <Header />
       <Page />
       <Footer />
      </Fragment>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('root'));