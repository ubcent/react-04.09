import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from 'components/Header';

import routes from 'components/routes.js';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Switch>
          {routes.map((route, idx) => <Route key={idx} {...route} />)}
        </Switch>
      </Fragment>
    );
  }
}

ReactDom.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));