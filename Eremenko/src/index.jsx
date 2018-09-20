import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Nav from 'components/Nav';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';

const items = ["Mwe", "Gth", "Opr"];

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav>nav</Nav>
        <Header size="small" categories={items} />
        <Main>main</Main>
        <Footer>copy</Footer>
      </Fragment>
    );
  }
}

ReactDom.render(<App />, document.getElementById('wrapper'));