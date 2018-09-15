import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Layout from './Layout/Layout';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout />
      </Fragment>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('root'));