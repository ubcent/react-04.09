import './scss/main.scss';
import bootstrap from 'bootstrap';

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout/Layout';
import Welcome from './components/Welcome/Welcome';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout />
        <Welcome />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
