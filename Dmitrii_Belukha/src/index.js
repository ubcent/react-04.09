import './scss/main.scss';
import bootstrap from 'bootstrap';

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Welcome from './components/Welcome/Welcome';
import MainPage from './components/Pages/MainPage/MainPage';
import UsersPage from './components/Pages/UsersPage/UsersPage';
import Comment from './components/Comment/Comment';
import CommentsPage from './components/Pages/CommentsPage/CommentsPage';
import DATA from './DATA';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" component={() => <MainPage data={DATA} />} exact />
          <Route path="/users" component={() => <UsersPage data={DATA} />} />
          <Route
            exact
            path="/comments"
            component={() => <CommentsPage data={DATA} />}
          />
          <Route
            path="/comments/:id"
            component={props => <Comment {...props} data={DATA} />}
          />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
