import './scss/main.scss';
import bootstrap from 'bootstrap';

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout/Layout';
import Welcome from './components/Welcome/Welcome';
import MainPage from './components/Pages/MainPage/MainPage';
import UsersPage from './components/Pages/UsersPage/UsersPage';
import CommentsPage from './components/Pages/CommentsPage/CommentsPage';
import DATA from './DATA';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout content={<CommentsPage data={DATA} />} />
        {/* <Welcome /> */}
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
