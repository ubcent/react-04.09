import './scss/main.scss';
import bootstrap from 'bootstrap';

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout />
        <Login />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
